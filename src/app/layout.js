import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nathan Sequeira",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
