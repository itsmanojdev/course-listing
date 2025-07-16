import { Rubik, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/ui/Navigation";

export const inter = Inter({ subsets: ['latin'] });
export const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: "Course Listing",
  description: "Course Listing by Manoj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`h-full flex flex-col bg-teal-50 text-gray-800 ${rubik.className} ${inter.className} antialiased`}
      >
        <header className="sticky top-0 z-100">
            <Navigation />
        </header>

        <main className="px-8 flex-1 flex flex-col sm:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}
