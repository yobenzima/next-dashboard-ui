import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        heliosSky: "#C3EBFA",
        heliosSkyLight: "#EDF9FD",
        heliosPurple: "#CFCEFF", 
        heliosPurpleLight: "#F1F0FF",   
        heliosYellow: "#FAE27C", 
        heliosYellowLight: "#FEFCE8",      
      }
    },
  },
  plugins: [],
};
export default config;
