import type { Metadata } from 'next'
import { Roboto_Mono } from "next/font/google";

import "./globals.css";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portal",
  description: "Systems access portal",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={roboto_mono.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
