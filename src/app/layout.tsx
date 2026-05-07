import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Arif A. | Senior .NET Backend Architect - ERP, FinTech & Scalable Systems",
  description:
    "Senior .NET Backend Architect with 13+ years of experience in ERP, FinTech, and SaaS applications. Specializing in microservices, clean architecture, and scalable backend systems. Based in Bangladesh, serving clients worldwide.",
  keywords: [
    "Md Arif",
    ".NET Developer",
    "Backend Architect",
    "ERP Developer",
    "FinTech",
    "Microservices",
    "C# Developer",
    "ASP.NET Core",
    "Software Engineer",
    "Bangladesh",
    "Full Stack Developer",
    "SQL Server",
    "PostgreSQL",
  ],
  authors: [{ name: "Md Arif A." }],
  openGraph: {
    title: "Md Arif A. | Senior .NET Backend Architect",
    description:
      "13+ years building production systems for ERP, FinTech & SaaS. Expert in scalable backend architecture, microservices, and clean code.",
    siteName: "Md Arif A. - Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Arif A. | Senior .NET Backend Architect",
    description:
      "13+ years building production systems for ERP, FinTech & SaaS. Expert in scalable backend architecture, microservices, and clean code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProviderWrapper children={children} />
      </body>
    </html>
  );
}
