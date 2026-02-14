import { IconArrowRight, IconChefHat } from "@tabler/icons-react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2">
            <IconChefHat className="size-4 text-muted-foreground" />
            <span className="font-medium text-muted-foreground text-sm">
              Culinary Collection
            </span>
          </div>

          <h1 className="text-balance font-bold text-5xl text-foreground sm:text-6xl">
            The <span className="text-primary">Recipe DB</span>
          </h1>

          <p className="mx-auto max-w-3xl text-balance text-lg text-muted-foreground">
            Tired of saving Tiktoks for recipes?{" "}
            <br className="hidden md:block" />
            Save, organize, and share recipes in one place.
          </p>

          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Link
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 font-medium transition-all",
                "hover:scale-105 hover:shadow-lg",
                "focus-within:scale-105 focus-within:shadow-lg focus-within:outline-none focus-within:ring-0",
              )}
              href="/recipes"
            >
              Explore Recipes
              <IconArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
