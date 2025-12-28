import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Naveen Kumar | AI Engineer Portfolio",
  description: "AI Engineer specializing in Generative AI, LLM Applications, Agentic RAG Systems, and end-to-end Machine Learning & Deep Learning solutions.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "GenAI", "LangChain", "RAG", "Portfolio"],
  authors: [{ name: "Chapala Naveen Kumar" }],
  openGraph: {
    title: "Naveen Kumar | AI Engineer Portfolio",
    description: "AI Engineer specializing in Generative AI, LLM Applications, and ML/DL Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
