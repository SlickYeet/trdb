import {
  IconArrowRight,
  IconBook,
  IconChefHat,
  IconClock,
  IconSparkles,
} from "@tabler/icons-react"
import Link from "next/link"

import { RecipeGrid } from "@/components/recipe-grid"
import { recentRecipes } from "@/constants"
import { cn } from "@/lib/utils"

export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background to-muted/30">
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

            <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
              A beautiful collection of recipes we've discovered and loved
              together. Quick to add, easy to find, and always inspiring.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95"
                href="/recipes"
              >
                Explore Recipes
                <IconArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <IconBook className="mx-auto mb-2 size-8 text-primary" />
              <p className="font-bold text-3xl text-foreground">
                {recentRecipes.length}+
              </p>
              <p className="mt-1 text-muted-foreground text-sm">
                Recipes Collected
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <IconClock className="mx-auto mb-2 size-8 text-primary" />
              <p className="font-bold text-3xl text-foreground">Quick</p>
              <p className="mt-1 text-muted-foreground text-sm">To Add</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <IconSparkles className="mx-auto mb-2 size-8 text-primary" />
              <p className="font-bold text-3xl text-foreground">Always</p>
              <p className="mt-1 text-muted-foreground text-sm">Inspiring</p>
            </div>
          </div>
        </div>
      </section>

      {recentRecipes.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-bold text-3xl text-foreground sm:text-4xl">
                Recent Recipes
              </h2>
              <p className="mt-2 text-muted-foreground">
                Latest additions to our collection
              </p>
            </div>
            <RecipeGrid recipes={recentRecipes} />
            <div
              className={cn("mt-12", recentRecipes.length < 3 && "text-center")}
            >
              <Link
                className="inline-flex items-center justify-center gap-2 font-medium text-primary transition-all hover:gap-3"
                href="/recipes"
              >
                View all recipes
                <IconArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="border-border border-t py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-bold text-3xl text-foreground sm:text-4xl">
            Cook With Us!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-balance text-muted-foreground">
            Browse through our collection of recipes organized by categories and
            tags.
          </p>
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-secondary to-accent px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95"
            href="/recipes"
          >
            Get Started
            <IconArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
