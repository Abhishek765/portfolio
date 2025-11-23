import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Vishwakarma | Full Stack Developer",
  description: "Portfolio of Abhishek Vishwakarma, a Full Stack Developer specializing in MERN stack and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30`}>
        {children}
      </body>
    </html>
  );
}
