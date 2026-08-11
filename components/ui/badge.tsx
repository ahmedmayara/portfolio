import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  dotClassName?: string;
  disabled?: boolean;
}

export interface BadgeButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeButtonVariants> {
  asChild?: boolean;
}

export type BadgeDotProps = React.HTMLAttributes<HTMLSpanElement>;

const badgeVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded border border-transparent font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-3.5 sm:[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [button&,a&]:cursor-pointer [button&,a&]:pointer-coarse:after:absolute [button&,a&]:pointer-coarse:after:size-full [button&,a&]:pointer-coarse:after:min-h-11 [button&,a&]:pointer-coarse:after:min-w-11",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success:
          "bg-[var(--color-success-accent,var(--color-green-500))] text-[var(--color-success-foreground,var(--color-white))]",
        warning:
          "bg-[var(--color-warning-accent,var(--color-yellow-500))] text-[var(--color-warning-foreground,var(--color-white))]",
        info: "bg-[var(--color-info-accent,var(--color-violet-500))] text-[var(--color-info-foreground,var(--color-white))]",
        outline:
          "bg-transparent border border-border text-secondary-foreground",
        dashed:
          "bg-transparent border border-dashed border-border text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
      appearance: {
        default: "",
        light: "",
        outline: "",
        ghost: "border-transparent bg-transparent",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
      size: {
        default:
          "h-5.5 min-w-5.5 px-[calc(--spacing(1)-1px)] text-sm sm:h-4.5 sm:min-w-4.5 sm:text-xs",
        lg: "h-6.5 min-w-6.5 px-[calc(--spacing(1.5)-1px)] text-base sm:h-5.5 sm:min-w-5.5 sm:text-sm",
        sm: "h-5 min-w-5 rounded-[.25rem] px-[calc(--spacing(1)-1px)] text-xs sm:h-4 sm:min-w-4 sm:text-[.625rem]",
        icon: "size-4.5 rounded-full p-0 text-xs sm:size-4 sm:text-[.625rem]",
      },
      shape: {
        default: "",
        circle: "rounded-full",
      },
    },
    compoundVariants: [
      /* Light */
      {
        variant: "primary",
        appearance: "light",
        className:
          "text-[var(--color-primary-accent,var(--color-blue-700))] bg-[var(--color-primary-soft,var(--color-blue-50))] dark:bg-[var(--color-primary-soft,var(--color-blue-950))] dark:text-[var(--color-primary-soft,var(--color-blue-600))]",
      },
      {
        variant: "secondary",
        appearance: "light",
        className:
          "bg-secondary dark:bg-secondary/50 text-secondary-foreground",
      },
      {
        variant: "success",
        appearance: "light",
        className:
          "text-[var(--color-success-accent,var(--color-green-800))] bg-[var(--color-success-soft,var(--color-green-100))] dark:bg-[var(--color-success-soft,var(--color-green-950))] dark:text-[var(--color-success-soft,var(--color-green-600))]",
      },
      {
        variant: "warning",
        appearance: "light",
        className:
          "text-[var(--color-warning-accent,var(--color-yellow-700))] bg-[var(--color-warning-soft,var(--color-yellow-100))] dark:bg-[var(--color-warning-soft,var(--color-yellow-950))] dark:text-[var(--color-warning-soft,var(--color-yellow-600))]",
      },
      {
        variant: "info",
        appearance: "light",
        className:
          "text-[var(--color-info-accent,var(--color-violet-700))] bg-[var(--color-info-soft,var(--color-violet-100))] dark:bg-[var(--color-info-soft,var(--color-violet-950))] dark:text-[var(--color-info-soft,var(--color-violet-400))]",
      },
      {
        variant: "destructive",
        appearance: "light",
        className:
          "text-[var(--color-destructive-accent,var(--color-red-700))] bg-[var(--color-destructive-soft,var(--color-red-50))] dark:bg-[var(--color-destructive-soft,var(--color-red-950))] dark:text-[var(--color-destructive-soft,var(--color-red-600))]",
      },
      /* Outline */
      {
        variant: "primary",
        appearance: "outline",
        className:
          "text-[var(--color-primary-accent,var(--color-blue-700))] border-[var(--color-primary-soft,var(--color-blue-100))] bg-[var(--color-primary-soft,var(--color-blue-50))] dark:bg-[var(--color-primary-soft,var(--color-blue-950))] dark:border-[var(--color-primary-soft,var(--color-blue-900))] dark:text-[var(--color-primary-soft,var(--color-blue-600))]",
      },
      {
        variant: "success",
        appearance: "outline",
        className:
          "text-[var(--color-success-accent,var(--color-green-700))] border-[var(--color-success-soft,var(--color-green-200))] bg-[var(--color-success-soft,var(--color-green-50))] dark:bg-[var(--color-success-soft,var(--color-green-950))] dark:border-[var(--color-success-soft,var(--color-green-900))] dark:text-[var(--color-success-soft,var(--color-green-600))]",
      },
      {
        variant: "warning",
        appearance: "outline",
        className:
          "text-[var(--color-warning-accent,var(--color-yellow-700))] border-[var(--color-warning-soft,var(--color-yellow-200))] bg-[var(--color-warning-soft,var(--color-yellow-50))] dark:bg-[var(--color-warning-soft,var(--color-yellow-950))] dark:border-[var(--color-warning-soft,var(--color-yellow-900))] dark:text-[var(--color-warning-soft,var(--color-yellow-600))]",
      },
      {
        variant: "info",
        appearance: "outline",
        className:
          "text-[var(--color-info-accent,var(--color-violet-700))] border-[var(--color-info-soft,var(--color-violet-100))] bg-[var(--color-info-soft,var(--color-violet-50))] dark:bg-[var(--color-info-soft,var(--color-violet-950))] dark:border-[var(--color-info-soft,var(--color-violet-900))] dark:text-[var(--color-info-soft,var(--color-violet-400))]",
      },
      {
        variant: "destructive",
        appearance: "outline",
        className:
          "text-[var(--color-destructive-accent,var(--color-red-700))] border-[var(--color-destructive-soft,var(--color-red-100))] bg-[var(--color-destructive-soft,var(--color-red-50))] dark:bg-[var(--color-destructive-soft,var(--color-red-950))] dark:border-[var(--color-destructive-soft,var(--color-red-900))] dark:text-[var(--color-destructive-soft,var(--color-red-600))]",
      },
      /* Ghost */
      {
        variant: "primary",
        appearance: "ghost",
        className: "text-primary",
      },
      {
        variant: "secondary",
        appearance: "ghost",
        className: "text-secondary-foreground",
      },
      {
        variant: "success",
        appearance: "ghost",
        className: "text-[var(--color-success-accent,var(--color-green-500))]",
      },
      {
        variant: "warning",
        appearance: "ghost",
        className: "text-[var(--color-warning-accent,var(--color-yellow-500))]",
      },
      {
        variant: "info",
        appearance: "ghost",
        className: "text-[var(--color-info-accent,var(--color-violet-500))]",
      },
      {
        variant: "destructive",
        appearance: "ghost",
        className: "text-destructive",
      },

      { size: "lg", appearance: "ghost", className: "px-0" },
      { size: "default", appearance: "ghost", className: "px-0" },
      { size: "sm", appearance: "ghost", className: "px-0" },
      { size: "icon", appearance: "ghost", className: "px-0" },
    ],
    defaultVariants: {
      variant: "primary",
      appearance: "default",
      size: "default",
    },
  },
);

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

const badgeButtonVariants = cva(
  "cursor-pointer transition-all inline-flex items-center justify-center leading-none size-3.5 [&>svg]:opacity-100! [&>svg]:size-3.5! p-0 rounded-md -me-0.5 opacity-60 hover:opacity-100",
  {
    variants: {
      variant: {
        default: "",
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
  size,
  appearance,
  shape,
  asChild = false,
  disabled,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? SlotPrimitive.Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, size, appearance, shape, disabled }),
        className,
      )}
      {...props}
    />
  );
}

function BadgeButton({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof badgeButtonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? SlotPrimitive.Slot : "span";
  return (
    <Comp
      data-slot="badge-button"
      className={cn(badgeButtonVariants({ variant, className }))}
      role="button"
      {...props}
    />
  );
}

function BadgeDot({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge-dot"
      className={cn(
        "size-1.5 rounded-full bg-[currentColor] opacity-75",
        className,
      )}
      {...props}
    />
  );
}

export { Badge, BadgeButton, BadgeDot, badgeVariants };
