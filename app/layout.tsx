import { Footer } from "@/components/Footer"; // Ajout de l'importation du Footer
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tech & Développement - Articles et Astuces pour Développeurs",
  description:
    "Découvrez les derniers articles et astuces sur la technologie, le développement web, et l'innovation. Idéal pour développeurs et passionnés de tech.",
  keywords:
    "technologie, développement web, articles tech, innovation, astuces développeurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} m-auto h-full max-w-xl px-4 antialiased`}
      >
        <div className="flex min-h-full flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
