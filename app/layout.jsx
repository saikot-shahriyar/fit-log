import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fit Log",
  description:
    "A simple, focused workout companion: build your daily routine, track your exercises, and stay consistent.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
