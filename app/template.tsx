"use client";
import { LoadingScreen, PageTransition } from "@/components/ui";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname == "/" && <LoadingScreen />}
      {children}
    </>
  );
}
