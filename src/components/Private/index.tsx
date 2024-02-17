"use client";
import { AuthContext } from "@/context/auth/AuthContext";
import { ReactNode, useContext } from "react";

type PrivateProps = {
  children: ReactNode;
};
export const Private = ({ children }: PrivateProps) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && children}
    </>
  );
};
