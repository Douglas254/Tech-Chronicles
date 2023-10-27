import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vibes: ["Great Vibes", "cursive"],
        mandali: ["Mandali", "sans-serif"],
        alumni: ["Alumni Sans Collegiate One", "sans-serif"],
        nosifer: ["Nosifer", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
        "dancing-script": ["Dancing Script", "cursive"],
      },
      colors: {
        dark: "#312480",
      },
    },
  },
  plugins: [],
};
export default config;
