import type * as React from "react"

import { cn } from "@/lib/utils"

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  htmlFor: string
  required?: boolean
  description?: string
  error?: string
}

export function FormField(props: FormFieldProps) {
  const { label, htmlFor, required, description, error, children, className } =
    props

  return (
    <div className={cn("space-y-2", className)}>
      <label
        className="flex items-center gap-1 font-medium text-foreground text-sm"
        htmlFor={htmlFor}
      >
        {label}
        {required && <span className="text-destructive">*</span>}
      </label>
      {description && (
        <p className="text-muted-foreground text-xs">{description}</p>
      )}
      {children}
      {error && <p className="text-destructive text-xs">{error}</p>}
    </div>
  )
}
