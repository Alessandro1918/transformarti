import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["var(--font-lato)"], //overwrites tailwind default font-body (applied globally @ layout.tsx file)
    },
    extend: {
      screens: {
        // "mobile_sm": "360px",
        "mobile_md": "410px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          light: colors.blue[100],
          medium: colors.blue[300],
          dark: colors.sky[800],
        }
      },
      fontFamily: {
        nunito_sans: "var(--font-nunito_sans)", //banner
        montserrat: "var(--font-montserrat)",   //titles
        // lato: "var(--font-lato)",            //body
      }
    },
  },
  plugins: [],
};
export default config;
