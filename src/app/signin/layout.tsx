import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArcadeX - Login",
  description: "Acessar sua conta",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
