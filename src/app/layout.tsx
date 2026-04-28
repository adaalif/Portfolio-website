import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

/* ── Typography ── */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: "Muhammad Alif — Applied AI Engineer",
  description:
    "Portfolio of Muhammad Alif Alferdiansyah, an Applied AI Engineer focused on building production-ready LLM systems, RAG pipelines, and scalable AI solutions.",
  keywords: [
    "AI engineer",
    "portfolio",
    "LLM",
    "RAG",
    "FastAPI",
    "Python",
    "machine learning",
  ],
  authors: [{ name: "Muhammad Alif Alferdiansyah" }],
  openGraph: {
    title: "Muhammad Alif — Applied AI Engineer",
    description:
      "Building production-ready LLM systems & scalable AI solutions. RAG pipelines, FastAPI, and fullstack development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrumentSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
