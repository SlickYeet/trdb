import type { Metadata } from "next"
import { Geist_Mono, Noto_Sans } from "next/font/google"

import { cn } from "@/lib/utils"

import "@/styles/globals.css"

const notoSans = Noto_Sans({
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  description: "The Recipe Database | by Lx2.dev",
  title: "The Recipe Database",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className="dark" lang="en">
      <body
        className={cn(
          "font-mono antialiased",
          notoSans.variable,
          geistMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
