/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate"
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "text-primary": "#0B3B3C", 
        "text-secondary": "#6D8A83",

        "bg-primary": "#ffffff", 
        "bg-secondary": "#E8EFE9", 
        "bg-numbers": "#F3F7F4",

        "button-primary": "#7E0707", 
        "button-hover": "#5A0505", 
        "button-active": "#4A0404",
        
        "border-primary": "#BDCDC5",

        accent: "#0B3B3C",
        muted: "#6D8A83",
        surface: "#E8EFE9",
      },
      fontFamily: {
          sans: 'var(--font-tt-norms)',
      },
      fontSize: {
        xs: ["0.65rem", { lineHeight: "1rem" }], // Super small text
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // Small text
        base: ["1rem", { lineHeight: "1.5rem" }], // Base text
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // Large text
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // Extra large
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // Headings
        "3xl": ["1.75rem", { lineHeight: "2.25rem" }], // Large headings
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // Hero headings
        "4xl": ["2.5rem", { lineHeight: "2.75rem" }], // Hero headings
        "7xl": ["90px", { lineHeight: "90px" }], // Hero headings
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
}
