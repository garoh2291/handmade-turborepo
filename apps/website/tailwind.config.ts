import globalConfig from "@handmade/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  presets: [globalConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/**/*.{ts,tsx}",
  ],
};
export default config;
