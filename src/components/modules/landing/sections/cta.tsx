import { IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function CtaSection() {
  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 font-bold text-3xl text-foreground sm:text-4xl">
          Cook With Us!
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-balance text-muted-foreground">
          Save your favorites, share them with friends, and never lose a recipe
          again!
        </p>

        <Link
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-secondary to-accent px-6 py-3 font-medium transition-all",
            "hover:scale-105 hover:shadow-lg",
            "focus-within:scale-105 focus-within:shadow-lg focus-within:outline-none focus-within:ring-0",
          )}
          href="/auth/signup"
        >
          Get Started
          <IconArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  )
}
