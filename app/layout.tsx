import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Mochiy_Pop_One, Quicksand} from "next/font/google";
import {metadataExp} from "@/constants/metadata";
import {MainLayout} from "@/components/MainLayout";

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

export const metadata: Metadata = metadataExp

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${quicksand.variable} ${mochiy.variable} font-sans`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <MainLayout>
            {children}
            </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
