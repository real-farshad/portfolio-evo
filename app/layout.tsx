import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "@/styles/globals.scss";

const kanit = Kanit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Farshad Portfolio",
  description: "Farshad Software Engineering(Web Development) Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.variable}>{children}</body>
    </html>
  );
}
