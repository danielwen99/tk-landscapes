import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "TK Landscapes - Luxury Landscaping Melbourne | Premium Outdoor Spaces",
  description:
    "Transform your Melbourne property with TK Landscapes. Expert paving, decking, construction & maintenance services. Bespoke outdoor spaces designed for luxury living.",
  keywords:
    "landscaping Melbourne, luxury landscaping, paving, decking, outdoor construction, garden maintenance, TK Landscapes",
  generator: "v0.app",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tklandscapes_logo-pTDI1Rk9STzbBwYQWz3wqtsAVpustF.png",
    shortcut:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tklandscapes_logo-pTDI1Rk9STzbBwYQWz3wqtsAVpustF.png",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tklandscapes_logo-pTDI1Rk9STzbBwYQWz3wqtsAVpustF.png",
  },
  openGraph: {
    title: "TK Landscapes - Luxury Landscaping Melbourne",
    description:
      "Expert landscaping services in Melbourne. Specializing in paving, decking, construction & maintenance.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TK Landscapes",
              alternateName: "TK Landscape Construction",
              description:
                "Premium landscaping services in Melbourne specializing in paving, decking, construction and maintenance",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Melbourne",
                addressRegion: "VIC",
                addressCountry: "AU",
              },
              telephone: "0406778600",
              email: "tklandscapes29@gmail.com",
              url: "https://tklandscapes.com.au",
              serviceArea: "Melbourne",
              priceRange: "$$$",
              openingHours: "Mo-Fr 07:00-17:00, Sa 08:00-16:00",
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${inter.variable} ${poppins.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
