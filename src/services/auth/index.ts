import { auth, db } from "@/database/firebase";
import { User } from "@/types/User";
import {
  User as AuthUserProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { setCookie } from "nookies";

type Form = { email: string; password: string };
export const AuthServices = {
  details: async (user: AuthUserProfile): Promise<User | null> => {
    const { token } = await user.getIdTokenResult(true);

    const docRef = doc(db, "user", user.uid);
    const docSnap = await getDoc(docRef);

    setCookie(null, "@authptr-token", token);
    return { id: docSnap.id, email: user.email, ...docSnap.data() } as User;
  },

  signIn: async ({ email, password }: Form): Promise<User | null> => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    if (credential.user) {
      const { user } = credential;
      return await AuthServices.details(user);
    } else return null;
  },

  authStateChanged: async (user: AuthUserProfile | null) => {
    if (user) {
      return await AuthServices.details(user);
    } else return null;
  },
};
