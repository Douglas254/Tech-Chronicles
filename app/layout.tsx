import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Tech Chronicles",
  description:
    "Platform focusing on collection of stories, updates, narratives about the world of technology news and insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <div className="lg:max-w-[900px] bg-slate-100/5 lg:px-16 mx-auto shadow-xl py-8 min-h-screen flex flex-col px-4 md:px-8 border-t-2 border-[#9f4296] rounded-lg">
            <Navbar />
            <div className="flex-auto">{children}</div>
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
