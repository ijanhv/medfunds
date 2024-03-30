/* eslint-disable new-cap */
import { Manrope, Noto_Sans } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "700", "800"],
});


export const noto = Noto_Sans({
    subsets: ["latin"],
    variable: "--font-noto-sans",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });