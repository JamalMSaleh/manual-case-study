import { cn } from "@/shared/utils/classNames"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ThemedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

export function ThemedButton({ children, variant = "primary", size = "md", className, ...props }: ThemedButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  }

  return (
    <button className={cn(variantClasses[variant], sizeClasses[size], className)} {...props}>
      {children}
    </button>
  )
}
