import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EFE0DE",
        fontprimary: "#141414",
        lightPink: "#FFF5F5",
      },
      backgroundImage: {
        "landing-page": "url('/home_background.png')",
      },
    },
  },
  plugins: [],
};
export default config;
