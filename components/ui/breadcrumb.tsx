"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { item } from "@/lib/global-anim-variants";
import CustomLink from "@/components/ui/custom-link";
import { HeadingSubText } from "@/components/ui/headings";

type BreadcrumbProps = {
  homeLabel?: string;
  rootPath?: string;
  className?: string;
};

function formatLabel(segment: string) {
  const decoded = decodeURIComponent(segment);
  return decoded.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumb({ homeLabel = "Home", rootPath = "/", className = "" }: BreadcrumbProps) {
  const pathname = usePathname() || "/";

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((seg) => !(seg.startsWith("(") && seg.endsWith(")")));

  const crumbs = segments.map((seg, i) => ({
    label: formatLabel(seg),
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));

  return (
    <motion.nav variants={item} aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center flex-wrap gap-2 text-[#4a4740]">
        <li className="flex items-center gap-2">
          <CustomLink href={rootPath} className="flex items-center gap-1.5 hover:text-[#1c1b19] transition-colors">
            <HomeIcon className="h-3 w-3 sm:w-4 sm:h-4" />
            <HeadingSubText
              text={homeLabel}
              className="text-[#4a4740]! text-[12px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]"
            />
          </CustomLink>
        </li>

        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <Fragment key={crumb.href}>
              <li aria-hidden="true" className="text-[#b8b2a4]">
                <ChevronIcon className="h-3.5 w-3.5" />
              </li>
              <li>
                {isLast ? (
                  <HeadingSubText
                    text={crumb.label}
                    aria-current="page"
                    className="font-semibold text-[#1c1b19] truncate text-[12px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]"
                  />
                ) : (
                  <CustomLink href={crumb.href}>
                    <HeadingSubText
                      text={crumb.label}
                      aria-current="page"
                      className="hover:text-[#1c1b19]! transition-all! truncate text-[12px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]"
                    />
                  </CustomLink>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </motion.nav>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9.5 12 3l9 6.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
