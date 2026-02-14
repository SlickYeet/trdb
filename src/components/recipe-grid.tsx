"use client"

import { IconChefHat } from "@tabler/icons-react"
import { usePathname } from "next/navigation"
import type { Recipe } from "payload-types"

import { RecipeCard } from "@/components/recipe-card"
import { Skeleton } from "@/components/ui/skeleton"

interface RecipeGridProps {
  recipes: Recipe[]
  loading?: boolean
}

export function RecipeGrid({ recipes, loading }: RecipeGridProps) {
  const pathname = usePathname()

  const isRecipesPage = pathname === "/recipes"

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton className="h-48 rounded-2xl" key={i} />
        ))}
      </div>
    )
  }

  if (recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-border border-dashed py-12">
        <IconChefHat className="mb-3 size-12 text-muted-foreground" />
        <p className="text-lg text-muted-foreground">No recipes found</p>
        <p className="text-muted-foreground/70 text-sm">
          {isRecipesPage
            ? "Try adjusting your search or filters"
            : "Be the first to add a recipe!"}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
