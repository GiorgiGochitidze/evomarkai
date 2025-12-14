import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar";
// 4-2

export const metadata: Metadata = {
  title: "EvoMarkAI",
  description:
    "EvoMarkAI - Your AI to improve marketing and content generation",
};

export default function CLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
