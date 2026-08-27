"use client";
import { MouseEvent, useState } from "react";
import Link from "next/link";
import { useEverythingState } from "@/store/store";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

function CustomLink(props: Props) {
  const everythingState = useEverythingState();
  const pathname = usePathname();

  const onClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    if (pathname == href) return;

    e.preventDefault();
    e.stopPropagation();

    everythingState.setTransitionLink(href);
    everythingState.setDoExitAnim(true);
  };

  return (
    <Link href={props.href} onClick={(e) => onClick(e, props.href)}>
      {props.children}
    </Link>
  );
}

export default CustomLink;
