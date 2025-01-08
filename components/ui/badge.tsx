import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground border border-input",
        // New color variants
        blue: "bg-blue-500 text-white hover:bg-blue-600",
        blueLight: "bg-blue-100 text-blue-800 hover:bg-blue-200",
        blueLighter: "bg-blue-50 text-blue-600 hover:bg-blue-100",
        blueStroke: "border border-blue-500 text-blue-700 hover:bg-blue-50",
        green: "bg-green-500 text-white hover:bg-green-600",
        greenLight: "bg-green-100 text-green-800 hover:bg-green-200",
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

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
