import type { Metadata } from "next"
import { Geist_Mono, Noto_Sans } from "next/font/google"

import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
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
  description: "The Recipe DB | by Lx2.dev",
  title: "The Recipe DB",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-mono antialiased",
          notoSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
