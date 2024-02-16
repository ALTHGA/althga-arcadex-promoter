"use client";
import { AuthContext } from "@/context/auth/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";

type PrivateProps = {
  children: ReactNode;
};
export const Private = ({ children }: PrivateProps) => {
  const { push } = useRouter();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      push("/dashboard");
    }
  }, [isAuthenticated, push]);

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && children}
    </>
  );
};
