import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from "@/contexts/ContextApi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Majors Feedback",
  description: "Generated with <3 by Marcelo - Majors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppProvider>
          <Toaster />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
