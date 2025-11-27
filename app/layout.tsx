import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Footer from "@/components/footer"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "IncreaseMembers.com - AI-Powered Marketing for Membership Clubs",
  description: "We boost memberships and improve retention with AI-powered marketing automation for membership clubs.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${cormorantGaramond.variable} overflow-x-hidden`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
