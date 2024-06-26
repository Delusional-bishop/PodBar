import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";
import ConvexClientProvider from "./provider/ConvexProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PodBar",
  description: "A podcast Generator with the usage of Generative AI",
  icons:{
    icon:'/assets/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ConvexClientProvider>
        {children}
        </ConvexClientProvider>
        </body>
    </html>
  );
}
