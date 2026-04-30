import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";
import { QueryProvider } from "@/context/QueryProvider";
import { LoadingBar } from "@/components/ui/loading-bar";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { GlobalUpgradeModalHost } from "@/components/monetization/GlobalUpgradeModalHost";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

import { Inter, Plus_Jakarta_Sans, Sen } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RentFlow360 - Property Management",
  description: "Transform how you manage properties with our all-in-one platform",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
    other: [
      {
        rel: "manifest",
        url: "/favicon/manifest.json",
      },
    ],
  },
};

// This forces the browser to treat your site like a native app screen
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} ${inter.variable} ${sen.variable} font-sans antialiased min-h-screen transition-colors duration-500`}
      >
        <QueryProvider>
          <AuthProvider>
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <LoadingSpinner text="Loading..." />
                  </div>
                </div>
              }
            >
              <LoadingBar />
              {children}
              <GlobalUpgradeModalHost />
              <ServiceWorkerRegister />
              <Toaster
                position="top-center"
                expand={false}
                richColors
                closeButton
              />
            </Suspense>
          </AuthProvider>
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
