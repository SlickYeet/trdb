import type { Metadata } from "next"

import "@/styles/globals.css"

export const metadata: Metadata = {
  description: "The Recipe Database | by Lx2.dev",
  title: "The Recipe Database",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className="dark" lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
