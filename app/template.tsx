"use client";
import { LoadingScreen } from "@/components/homepage/home-init-anim";
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
