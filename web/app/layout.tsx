import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAEFTS | Emergency Financial Trigger System",
  description: "Autonomous financial operations triggered by real-time emergency detection",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${inter.className} bg-slate-950 text-white min-h-screen`}>
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
