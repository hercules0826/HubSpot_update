import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SAGE Senior Care Discovery",
  description:
    "Helping families find safe, compassionate senior living — quickly, locally, and free.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-beige text-grayText antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex justify-center items-start py-10 px-4 sm:px-8">
          <div className="w-full max-w-3xl bg-white/80 rounded-xl shadow-lg p-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
