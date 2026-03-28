import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnsFredd • Senior Full Stack Developer Portfolio 2026",
  description: "Senior Full Stack Developer specializing in AI-driven platforms, Next.js ecosystems, and high-performance React Native applications. 3+ years of experience transforming complex backend logic into human-centric design.",
  keywords: ["Full Stack Developer", "Next.js 15", "AI Engineering", "React Native", "Django", "Ghana"],
  authors: [{ name: "Ansah Frederick" }],
  icons: {
    icon: "/globe.svg", // Using existing globe.svg as temporary icon to avoid 404
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
