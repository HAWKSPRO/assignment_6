import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:"Roboto"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header_color:"#F7F7F7",
        border:"#676767",
      },
    },
  },
  plugins: [],
} satisfies Config;
