import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { Mochiy_Pop_One, Quicksand } from "next/font/google";
import { metadata } from "@/constants/metadata";
import { MainLayout } from "@/components/MainLayout";
import { AuthProvider } from "@/context/auth-provider";
import { Toaster } from "@/components/ui/sonner";
import React, { Suspense } from "react";
import { Loader2 } from "lucide-react";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const mochiy = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mochiy",
  display: "swap",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${mochiy.variable} font-sans`}>
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <Loader2 className="w-10 h-10 animate-spin" />
            </div>
          }
        >
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Toaster position="top-right" richColors />
              <MainLayout>{children}</MainLayout>
            </ThemeProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
