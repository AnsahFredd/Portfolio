import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // add other paths as needed
  ],
  theme: {
    extend: {
      // You can add your custom theme extensions here
    },
  },
  plugins: [],
};

export default config;
