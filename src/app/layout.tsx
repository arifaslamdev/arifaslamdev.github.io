import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arif Aslam | Senior .NET Backend Developer | ERP, FinTech & APIs",
  description:
    "Senior .NET Backend Developer with 17+ years of professional software development experience in ERP, FinTech, Microfinance, ASP.NET Core Web API, SQL Server, PostgreSQL, Clean Architecture, scalable APIs, and database optimization.",
  keywords: [
    "Arif Aslam",
    "Senior .NET Backend Developer",
    ".NET Developer",
    "ERP Developer",
    "FinTech Developer",
    "Microfinance Software",
    "ASP.NET Core Web API",
    "SQL Server Optimization",
    "PostgreSQL Optimization",
    "Clean Architecture",
    "CQRS",
    "RBAC",
    "Legacy .NET Modernization",
  ],
  authors: [{ name: "Arif Aslam" }],
  openGraph: {
    title: "Arif Aslam | Senior .NET Backend Developer",
    description:
      "17+ years building, fixing, and scaling production .NET backend systems for ERP, FinTech, Microfinance, SaaS, APIs, and database-heavy business systems.",
    siteName: "Arif Aslam Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Aslam | Senior .NET Backend Developer",
    description:
      "Senior .NET Backend Developer focused on ERP, FinTech, scalable APIs, SQL optimization, and production backend systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
