import { Variants } from "framer-motion";

export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2.2,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

export const containerUndelayed: Variants = {
  ...container,
  show: {
    ...container.show,
    transition: {
      // @ts-ignore
      ...container.show.transition,
      delayChildren: 0.2,
    },
  },
};

export const item: Variants = {
  exit: { opacity: 0, y: -20 },
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
