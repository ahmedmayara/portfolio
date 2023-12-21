"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { motion } from "framer-motion";

const variants = cva(
  "flex flex-col justify-center rounded-2xl border shadow-xl hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
        "2x1": "md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4",
        "2x4":
          "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  },
);

export type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

export function GridItem({ children, size }: GridItemProps) {
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className={cn(
        "transition-colors duration-150 ease-in-out",
        variants({
          size,
        }),
      )}
    >
      {children}
    </motion.div>
  );
}
