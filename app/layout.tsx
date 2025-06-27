import type React from "react"
import type { Metadata } from "next"
import { Inter, Marcellus, Quicksand } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
})
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "Coisas Boas da Baya Nativa",
  description: "Um portal que celebra saberes, sabores e soluções da floresta viva",
  keywords: "regenerativo, indígena, permacultura, cacau, fitoterápicos, educação",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${marcellus.variable} ${quicksand.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
