import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "RacketGrowth - AI-Powered Marketing for Racket Sports Clubs",
  description:
    "We fill courts, boost memberships, and grow your racket sports programs through automation and smart advertising.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} overflow-x-hidden`}>
        <Suspense fallback={null}>
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
