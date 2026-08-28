import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dreamcoat Home Improvement",
  description:
    "Quality painting and home improvement services from Dreamcoat."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}