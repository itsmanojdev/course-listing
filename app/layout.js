import { Rubik, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/Navigation";

export const inter = Inter({ subsets: ['latin'] });
export const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: "Course Listing",
  description: "Course Listing by Manoj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`h-dvh flex flex-col bg-blue-50 ${rubik.className} ${inter.className} antialiased`}
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
