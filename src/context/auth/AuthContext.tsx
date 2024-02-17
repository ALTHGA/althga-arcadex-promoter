"use client";

import { auth } from "@/database/firebase";
import { AuthServices } from "@/services/auth";
import { User } from "@/types/User";
import { signOut as authSignOut, onIdTokenChanged } from "firebase/auth";
import { destroyCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";

type Form = {
  email: string;
  password: string;
};

type AuthContextProps = {
  signIn: ({ email, password }: Form) => Promise<void>;
  signOut: () => Promise<void>;

  user: User | null;

  isAuthenticated: boolean;
  loading: boolean;
};
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  let isAuthenticated = !!user;

  async function signIn({ email, password }: Form) {
    try {
      const auth = await AuthServices.signIn({ email, password });
      setUser(auth);
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    if (isAuthenticated) {
      await authSignOut(auth);
    }
    destroyCookie(null, "@authptr-token");
    setUser(null);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = onIdTokenChanged(auth, async (profile) => {
      const profileDetails = await AuthServices.authStateChanged(profile);

      if (!profileDetails) {
        signOut();
        return;
      }

      setUser(profileDetails);
      setLoading(false);
    });
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user, isAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
