import { IconArrowRight } from "@tabler/icons-react"
import Link from "next/link"
import type { Recipe } from "payload-types"

import { RecipeGrid } from "@/components/modules/recipies/ui/recipe-grid"
import { cn } from "@/lib/utils"

interface RecentRecipesSectionProps {
  recentRecipes: Recipe[]
}

export function RecentRecipesSection({
  recentRecipes,
}: RecentRecipesSectionProps) {
  return (
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

        <div className={cn("mt-12", recentRecipes.length < 3 && "text-center")}>
          <Link
            className={cn(
              "inline-flex items-center justify-center gap-2 font-medium text-primary transition-all",
              "hover:gap-3",
              "focus-within:gap-3 focus-within:outline-none focus-within:ring-0",
            )}
            href="/recipes"
          >
            View all recipes
            <IconArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
