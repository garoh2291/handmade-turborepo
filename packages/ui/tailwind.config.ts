import type { Config } from "tailwindcss";

import baseConfig from "@handmade/tailwind-config";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;
