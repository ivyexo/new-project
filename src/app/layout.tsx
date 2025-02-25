import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Management Tool",
  description: "Manage your products, customers, and orders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={geist.className}>
        <Sidebar />
        <main className='ml-64 min-h-screen bg-gray-50'>{children}</main>
      </body>
    </html>
  );
}
