import { cn } from "@/shared/utils/classNames";
import type { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function HeroText({ children, className }: TypographyProps) {
  return <h1 className={cn("text-hero", className)}>{children}</h1>;
}

export function Title({ children, className }: TypographyProps) {
  return <h2 className={cn("text-title", className)}>{children}</h2>;
}

export function Label({ children, className }: TypographyProps) {
  return <label className={cn("text-label", className)}>{children}</label>;
}

export function BodyText({ children, className }: TypographyProps) {
  return <p className={cn("text-body", className)}>{children}</p>;
}

export function SmallText({ children, className }: TypographyProps) {
  return <span className={cn("text-small", className)}>{children}</span>;
}

export function TinyText({ children, className }: TypographyProps) {
  return <span className={cn("text-tiny", className)}>{children}</span>;
}
