import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "./fonts/Proxima-Nova-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Proxima-Nova-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Proxima-Nova-Semibold.woff2",
      weight: "600",
    },
    {
      path: "./fonts/Proxima-Nova-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-proxima-nova",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "handmade ",
  description: "Handmade",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${proximaNova.className} h-full bg-background text-foreground`}
      >
        <div className="flex h-full flex-col">
          <main className="mt-[88px] h-auto flex-1 md:container">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
