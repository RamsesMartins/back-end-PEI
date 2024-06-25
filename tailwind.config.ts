import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const brandColor = {
  "50": "#f2f9f9",
  "100": "#ddeff0",
  "200": "#bfe0e2",
  bg: "#92cace",
  "400": "#5faab1",
  "500": "#438e96",
  "600": "#3b757f",
  "700": "#356169",
  "800": "#325158",
  title: "#2d464c",
  "950": "#1a2c32",
};

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-inter)"],
      },
    },
    colors: {
      brandColor,
      ringColor: {
        DEFAULT: brandColor["500"],
      },
    },
  },
  plugins: [],
} satisfies Config;
