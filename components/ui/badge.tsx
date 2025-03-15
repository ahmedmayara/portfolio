import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        blue: "bg-blue-500 text-white hover:bg-blue-600 border-transparent",
        blueLight:
          "bg-blue-100 text-blue-800 hover:bg-blue-200 border-transparent",
        blueLighter:
          "bg-blue-50 text-blue-600 hover:bg-blue-100 border-transparent",
        blueStroke: "border border-blue-500 text-blue-700 hover:bg-blue-50",
        green: "bg-green-500 text-white hover:bg-green-600",
        greenLight:
          "bg-green-100 text-green-800 hover:bg-green-200 border-transparent",
        greenLighter: "bg-green-50 text-green-600 hover:bg-green-100",
        greenStroke: "border border-green-500 text-green-700 hover:bg-green-50",
        red: "bg-red-500 text-white hover:bg-red-600",
        redLight: "bg-red-100 text-red-800 hover:bg-red-200",
        redLighter: "bg-red-50 text-red-600 hover:bg-red-100",
        redStroke: "border border-red-500 text-red-700 hover:bg-red-50",
        yellow: "bg-yellow-500 text-white hover:bg-yellow-600",
        yellowLight: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        yellowLighter: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100",
        yellowStroke:
          "border border-yellow-500 text-yellow-700 hover:bg-yellow-50",
        purple: "bg-purple-500 text-white hover:bg-purple-600",
        purpleLight: "bg-purple-100 text-purple-800 hover:bg-purple-200",
        purpleLighter: "bg-purple-50 text-purple-600 hover:bg-purple-100",
        purpleStroke:
          "border border-purple-500 text-purple-700 hover:bg-purple-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
