import * as React from "react"

import { cn } from "@/lib/utils"

export interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-25 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm",
          "ring-offset-background transition-all",
          "placeholder:text-muted-foreground",
          "focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y hover:border-secondary/50",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
FormTextarea.displayName = "FormTextarea"

export { FormTextarea }
