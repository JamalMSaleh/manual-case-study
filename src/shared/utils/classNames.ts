import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Modern utility for conditional class names with Tailwind merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Keep your existing function for backward compatibility
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

// Additional utility for conditional classes
export function conditionalClass(condition: boolean, trueClass: string, falseClass?: string): string {
  return condition ? trueClass : falseClass || ""
}
