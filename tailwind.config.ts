import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "#232161",
        "text-secondary": "#6D63FF",
        "white-opacity-40": "rgba(255, 255, 255, 0.4)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "title-l": "28px",
        "title-2": "16x",
        "custom-20": "20px",
        "custom-14": "14px",
      },
      borderRadius: {
        "40px": "40px",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #6D63FF, #CC98FF)",
      },
    },
  },
  plugins: [],
} satisfies Config;
