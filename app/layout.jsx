import "../styles/globals.css";

import localFont from "next/font/local";
import { Poppins, Source_Serif_Pro } from "next/font/google";
import Navbar from "@/components/Users/Navbar";

export const metadata = {
  title: "News Website | Undefined",
  description: "Generated by create next app",
};

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ssp = Source_Serif_Pro({
  variable: "--font-ssp",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const gts = localFont({
  src: [
    {
      path: "../assets/fonts/GTS-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/GTS-Reguler.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gts",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${gts.variable} ${poppins.variable} ${ssp.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
