import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva("relative inline-block", {
  variants: {
    size: {
      default: "size-5",
      sm: "size-4",
      md: "size-6",
      lg: "size-10",
      xl: "size-16",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

export function Spinner({ size, className, ...props }: SpinnerProps) {
  const sizeInPixels = {
    default: 20,
    sm: 16,
    md: 24,
    lg: 40,
    xl: 64,
  }[size || "default"];

  return (
    <div
      className={cn(spinnerVariants({ size }))}
      role="status"
      aria-label="Loading"
      {...props}
    >
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={cn(
            "bg-muted-foreground animate-spinner absolute rounded-full",
            className,
          )}
          style={{
            width: `${sizeInPixels * 0.1}px`,
            height: `${sizeInPixels * 0.25}px`,
            left: `${sizeInPixels * 0.45}px`,
            top: `${sizeInPixels * 0.1}px`,
            transformOrigin: `${sizeInPixels * 0.05}px ${sizeInPixels * 0.4}px`,
            transform: `rotate(${index * 45}deg)`,
            opacity: 1 - index * 0.1,
            animationDelay: `${-1 + index * 0.125}s`,
          }}
        />
      ))}
    </div>
  );
}
