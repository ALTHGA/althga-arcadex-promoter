"use client";

import { auth } from "@/database/firebase";
import { AuthServices } from "@/services/auth";
import { User } from "@/types/User";
import { signOut as authSignOut, onIdTokenChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
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
  const { push } = useRouter();
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
    await authSignOut(auth);
    destroyCookie(null, "@authptr-token");
  }

  useEffect(() => {
    const subscriber = onIdTokenChanged(auth, async (profile) => {
      const profileDetails = await AuthServices.authStateChanged(profile);

      if (!isAuthenticated) {
        destroyCookie(null, "@authptr-token");
        push("/signin");
        return;
      }

      setUser(profileDetails);
      setLoading(false);
    });
    return subscriber;
  }, [push, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user, isAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
