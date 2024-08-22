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
      fontSize: {
        head: "62px",
        subhead: "32px",
        body: "18px",
        label: "16px",
        code: "14px",
      },
      colors: {
        p1: "#01080E",
        p2: "#011627",
        p3: "#011221",
        s1: "#607B96",
        s2: "#3C9D93",
        s3: "#4D5BCE",
        s4: "#FFFFFF",
        a1: "#FEA55F",
        a2: "#43D9AD",
        a3: "#E99287",
        a4: "#C98BDF",
        line: "#1E2D3D",
        g1: "#4D5BCE",
        g2: "#43D9AD",
      },
    },
  },
  plugins: [],
};
export default config;