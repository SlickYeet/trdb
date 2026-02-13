"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "All Recipes" },
]

export function SiteHeader() {
  const pathname = usePathname()

  const isRecipesPage =
    pathname === "/recipes" || pathname.startsWith("/recipes/")

  return (
    <header className="sticky top-0 z-50 w-full border-border border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link className="group flex items-center gap-2" href="/">
            <div className="flex size-9 items-center justify-center rounded-full bg-linear-to-br from-secondary to-accent transition-transform group-hover:scale-110">
              <Image
                alt="The Recipe DB Logo"
                height={100}
                src="/icon0.svg"
                width={100}
              />
            </div>
            <span className="hidden font-bold text-foreground text-lg transition-colors group-hover:text-foreground/80 sm:inline">
              The Recipe DB
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/recipes" ? isRecipesPage : pathname === href

              return (
                <Link
                  className={cn(
                    "font-medium text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  href={href}
                  key={href}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
