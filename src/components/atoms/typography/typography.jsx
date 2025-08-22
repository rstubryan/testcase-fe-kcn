"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Slot = React.forwardRef(({ children, ...props }, ref) => {
  const child = React.Children.only(children);
  return React.cloneElement(child, { ...props, ref });
});

const typographyVariants = (props) => {
  const { variant = "default", size = "default" } = props;

  const variants = {
    default: "text-gray-900",
    secondary: "text-gray-600",
    destructive: "text-red-600",
  };

  const sizes = {
    default: "leading-7",
    h1: "text-4xl font-bold tracking-tight",
    h2: "text-3xl font-semibold tracking-tight",
    h3: "text-2xl font-semibold tracking-tight",
    h4: "text-xl font-semibold tracking-tight",
    h5: "text-lg font-semibold tracking-tight",
    h6: "text-base font-semibold tracking-tight",
    sm: "text-sm text-gray-500 tracking-tight",
    xs: "text-xs text-gray-500 tracking-tight",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    ul: "my-6 ml-6 list-disc [&>li]:mt-2",
    table: "my-6 w-full overflow-y-auto",
    th: "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
    td: "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
  };

  return cn(variants[variant], sizes[size]);
};

function Typography({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={cn(
        typographyVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Typography, typographyVariants };
