import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLogo from "../../public/assets/logo.png";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hammad Aslam | Frontend Web & App Developer",
  description:
    "Hey, I am Hammad Aslam a Front-end Web developer I build web and mobile responsive apps using latest state of the art Technology.",
  icons: {
    icon: "../../public/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
