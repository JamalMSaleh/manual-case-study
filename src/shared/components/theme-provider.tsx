"use client"

import { createContext, useContext, type ReactNode } from "react"

interface ThemeColors {
  textPrimary: string
  textSecondary: string
  bgPrimary: string
  bgSecondary: string
  buttonPrimary: string
  buttonHover: string
  buttonActive: string
}

interface ThemeContextType {
  colors: ThemeColors
  getTextClass: (variant: "hero" | "title" | "label" | "body" | "small" | "tiny") => string
  getButtonClass: (variant: "primary" | "secondary") => string
}

const themeColors: ThemeColors = {
  textPrimary: "#0B3B3C",
  textSecondary: "#6D8A83",
  bgPrimary: "#ffffff",
  bgSecondary: "#E8EFE9",
  buttonPrimary: "#7E0707",
  buttonHover: "#5A0505",
  buttonActive: "#4A0404",
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const getTextClass = (variant: "hero" | "title" | "label" | "body" | "small" | "tiny") => {
    const classes = {
      hero: "text-hero",
      title: "text-title",
      label: "text-label",
      body: "text-body",
      small: "text-small",
      tiny: "text-tiny",
    }
    return classes[variant]
  }

  const getButtonClass = (variant: "primary" | "secondary") => {
    const classes = {
      primary: "btn-primary",
      secondary: "btn-secondary",
    }
    return classes[variant]
  }

  return (
    <ThemeContext.Provider
      value={{
        colors: themeColors,
        getTextClass,
        getButtonClass,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
