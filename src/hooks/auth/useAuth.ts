import { AuthContext } from "@/context/auth/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  const { user } = useContext(AuthContext);
  return user;
};
