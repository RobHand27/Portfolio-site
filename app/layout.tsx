import type React from "react"
import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: "Rob Hand | Software Engineer",
  description: "Portfolio of Rob Hand, software engineer and CS student at UIUC",
  icons: {
    icon: "/logo.svg",
  },
  verification: {
    google: "E25ItyEFsNt4HmG7o0umpINxhDehL-LcyhUsK6N9y8U",
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
      {/* Add the font-sans class here */}
      <body className="font-sans">{children}</body>
    </html>
  )
}