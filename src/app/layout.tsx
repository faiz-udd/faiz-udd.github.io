import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
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
  title: "Faiz Uddin | Full Stack Developer",
  description:
    "Explore the portfolio of Faiz Uddin, a Professional Full Stack Developer specializing in Nest.js, React.js, mongo, and modern web solutions. Built for performance and user experience.",
  keywords: [
    "Faiz Uddin",
    "Full Stack Developer",
    "Nest.js Portfolio",
    "Chatbot Development",
    "Software Engineer",
    "React Developer",
  ],
  authors: [{ name: "Faiz Uddin" }],
  openGraph: {
    title: "Faiz Uddin | Personal Portfolio",
    description:
      "Full Stack Developer & AI Automation Expert — Building the future of the web.",
    url: "https://faiz-udd.vercel.app",
    siteName: "Faiz uddin Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Faiz Uddin Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz Uddin | Full Stack Developer",
    description: "Building modern web applications and AI automations.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
