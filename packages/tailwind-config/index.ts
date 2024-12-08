import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [""],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        muted: "hsl(var(--muted))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        placeholder: "hsl(var(--placeholder))",
        error: "hsl(var(--error))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          600: "hsl(var(--primary-600))",
        },
        "primary-main": {
          DEFAULT: "hsl(var(--primary-main))",
          foreground: "hsl(var(--primary-main-foreground))",
        },
        "primary-dark": {
          DEFAULT: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-dark-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "secondary-main": {
          DEFAULT: "hsl(var(--secondary-main))",
          foreground: "hsl(var(--secondary-main-foreground))",
        },
        "secondary-main-dark": {
          DEFAULT: "hsl(var(--secondary-main-dark))",
          foreground: "hsl(var(--secondary-main-dark-foreground))",
        },
        "secondary-main-light": {
          DEFAULT: "hsl(var(--secondary-main-light))",
          foreground: "hsl(var(--secondary-main-light-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
        },
        information: {
          DEFAULT: "hsl(var(--information))",
        },
      },
    },
  },
} satisfies Config;
