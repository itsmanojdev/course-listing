import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Course Listing",
  description: "Course Listing by Manoj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`h-dvh flex flex-col bg-blue-50 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-100">
            <Navigation />
        </header>

        <main className="p-8 flex-1 sm:px-16">
          
          {children}
        </main>
      </body>
    </html>
  );
}
