import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUserNameFromEmail(email: string) {
  const idx = email.indexOf("@")
  return email.substring(0, idx)
}
