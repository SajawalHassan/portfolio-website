"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import { useEverythingState } from "@/store/store";
import { usePathname } from "next/navigation";

interface Props extends React.ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
}

function CustomLink({ href, children, onClick: externalOnClick, ...props }: Props) {
  const everythingState = useEverythingState();
  const pathname = usePathname();

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    externalOnClick?.(e);

    if (e.defaultPrevented) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    if (pathname == href) return;

    e.preventDefault();
    e.stopPropagation();

    everythingState.setTransitionLink(href.toString());
    everythingState.setDoExitAnim(true);
  };

  return (
    <Link href={href} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}

export default CustomLink;
