import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "SAGE Senior Care Discovery",
  description:
    "Helping families find safe, compassionate senior living — quickly, locally, and free.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-beige text-grayText antialiased min-h-screen flex flex-col">
        <SessionProvider>
          <Header />

          {/* Main Content Container */}
          <main className="flex-1 w-full flex justify-center py-12 px-6">
            <div className="w-full max-w-7xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg p-10">
              {children}
            </div>
          </main>

          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}



