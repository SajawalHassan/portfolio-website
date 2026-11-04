"use client";
import { InitAnim } from "@/components/init-anim";
import { useEverythingState } from "@/store/store";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const everythingState = useEverythingState();

  useEffect(() => {
    everythingState.setDoExitAnim(false);
  }, []);
  return (
    <>
      {everythingState.showInitAnim && <InitAnim />}
      {children}
    </>
  );
}
