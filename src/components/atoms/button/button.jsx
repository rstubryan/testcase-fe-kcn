"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = (props) => {
  const { variant = "primary", size = "default", fullWidth = false } = props;

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline:
      "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "py-2 px-4 rounded text-base",
    sm: "py-1 px-3 rounded-sm text-sm",
    lg: "py-3 px-6 rounded-md text-lg",
    icon: "h-9 w-9",
  };

  return cn(
    "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer",
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
  );
};

function Button({
  className,
  variant,
  size,
  fullWidth,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
