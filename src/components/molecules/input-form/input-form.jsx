"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/atoms/input/input";
import { Label } from "@/components/atoms/label/label";

function InputForm({
  id,
  label,
  className,
  labelClassName,
  inputClassName,
  ...inputProps
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label htmlFor={id} className={labelClassName}>
          {label}
        </Label>
      )}
      <Input id={id} className={inputClassName} {...inputProps} />
    </div>
  );
}

export { InputForm };
