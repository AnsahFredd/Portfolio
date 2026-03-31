import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // added just in case components are at root
  ],
  theme: {
    extend: {
      // You can add your custom theme extensions here
    },
  },
  plugins: [],
};

export default config;
