import * as React from "react";
import { cn } from "@/lib/utils";

const inputVariants = (props) => {
  const { variant = "default", size = "default", error = false } = props;

  const variants = {
    default: "border-gray-200 bg-transparent",
    filled: "border-gray-200 bg-gray-50 dark:bg-gray-800",
    outline: "border border-gray-300 bg-transparent",
  };

  const sizes = {
    default: "h-9 px-3 py-1 text-base md:text-sm",
    sm: "h-8 px-2 py-1 text-sm",
    lg: "h-10 px-4 py-2 text-base",
  };

  return cn(
    "file:text-gray-700 placeholder:text-gray-400 selection:bg-blue-100 selection:text-blue-800 flex w-full min-w-0 rounded-md border shadow-sm transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "focus:border-blue-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-200",
    error ? "border-red-500" : "",
    variants[variant],
    sizes[size],
  );
};

function Input({ type, variant, size, error, className, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        inputVariants({
          variant,
          size,
          error,
        }),
        className,
      )}
      {...props}
    />
  );
}

export { Input, inputVariants };
