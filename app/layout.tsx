import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rob Hand | Software Engineer",
  description: "Portfolio of Rob Hand, software engineer and CS student at UIUC",
  icons: {
    icon: "/logo.svg",
  },
  verification: {
    google: "F-TNEnwh_HsEitJU2-QGMd9BkERY2BNfWAh_UVirufw",
  },
  openGraph: {
    title: "Hi, I'm Rob Hand",
    description: "Software Engineer · CS @ UIUC",
    url: "https://robhand.dev/",
    siteName: "Rob Hand",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rob Hand Software Engineer · CS @ UIUC",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi, I'm Rob Hand",
    description: "Software Engineer · CS @ UIUC",
    images: ["/og-image.svg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}