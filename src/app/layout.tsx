import type { Metadata } from "next";
import "./globals.css";
import MainNavbar from "@/components/Home/Navbar/MainNavbar";

export const metadata: Metadata = {
  title: "EvoMarkAI - Home",
  description: "EvoMarkAI - Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
