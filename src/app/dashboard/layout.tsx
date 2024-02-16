"use client";
import { Private } from "@/components/Private";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isPublicRoute = checkIsPublicRoute(pathname!);

  return (
    <>
      {isPublicRoute && children}
      {!isPublicRoute && <Private>{children}</Private>}
    </>
  );
}
