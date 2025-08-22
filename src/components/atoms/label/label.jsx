"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const labelVariants = (props) => {
  const { variant = "default", size = "default", required = false } = props;

  const variants = {
    default: "text-gray-900",
    secondary: "text-gray-600",
    muted: "text-gray-500",
  };

  const sizes = {
    default: "text-sm",
    sm: "text-xs",
    lg: "text-base",
  };

  return cn(
    "flex items-center gap-2 font-medium leading-none select-none",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
    variants[variant],
    sizes[size],
    required && "after:content-['*'] after:text-red-500 after:ml-0.5",
  );
};

function Label({ className, variant, size, required, ...props }) {
  return (
    <label
      data-slot="label"
      className={cn(
        labelVariants({
          variant,
          size,
          required,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Label, labelVariants };
