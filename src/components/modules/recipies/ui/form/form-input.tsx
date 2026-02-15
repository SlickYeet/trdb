import * as React from "react"

import { cn } from "@/lib/utils"

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-11 w-full rounded-xl border border-input bg-card px-4 py-2 text-sm",
          "ring-offset-background transition-all",
          "file:border-0 file:bg-transparent file:font-medium file:text-sm",
          "placeholder:text-muted-foreground",
          "focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "hover:border-secondary/50",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    )
  },
)

FormInput.displayName = "FormInput"

export { FormInput }
