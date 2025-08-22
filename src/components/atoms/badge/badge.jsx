"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = (props) => {
  const { variant = "primary" } = props;

  const variants = {
    primary: "border-transparent bg-blue-50 text-blue-600 hover:bg-blue-100",
    secondary: "border-transparent bg-gray-50 text-gray-800 hover:bg-gray-100",
    destructive: "border-transparent bg-red-50 text-red-600 hover:bg-red-100",
    success: "border-transparent bg-green-50 text-green-600 hover:bg-green-100",
    outline:
      "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
  };

  return cn(
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-colors overflow-hidden",
    variants[variant],
  );
};

function Badge({ className, variant, ...props }) {
  return (
    <span
      data-slot="badge"
      className={cn(
        badgeVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
