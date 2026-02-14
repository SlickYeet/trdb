"use client"

import { IconChefHat, IconClock, IconPointFilled } from "@tabler/icons-react"
import Link from "next/link"

import { TagBadge } from "@/components/tag-badge"
import { cn } from "@/lib/utils"
import type { Recipe } from "@/types"

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0)

  return (
    <Link
      className={cn(
        "h-full cursor-pointer rounded-2xl bg-card p-6 ring-2 ring-border transition-all duration-200",
        "hover:scale-[1.02] hover:border-primary/50 hover:shadow-md hover:shadow-primary hover:ring-2 hover:ring-primary/50",
        "focus-within:scale-[1.02] focus-within:shadow-md focus-within:shadow-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary/50",
      )}
      href={`/recipes/${recipe.slug}`}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex-1">
          <h3 className="line-clamp-2 font-bold text-foreground text-xl">
            {recipe.title}
          </h3>
          {recipe.description && (
            <p className="mt-2 line-clamp-2 text-muted-foreground text-sm">
              {recipe.description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          {recipe.prepTime && (
            <div className="flex items-center gap-1.5">
              <IconClock className="size-4 text-muted-foreground" />
              <span>{recipe.prepTime}m prep</span>
            </div>
          )}
          {recipe.cookTime && (
            <div className="flex items-center gap-1.5">
              <IconChefHat className="size-4 text-muted-foreground" />
              <span>{recipe.cookTime}m cook</span>
            </div>
          )}
        </div>

        {recipe.tags && recipe.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <TagBadge
                key={typeof tag === "string" ? tag : tag.id}
                tag={tag}
              />
            ))}
          </div>
        )}

        {recipe.ingredients.length > 0 && (
          <div className="border-border border-t pt-2 text-muted-foreground text-xs">
            <span className="font-semibold">{recipe.ingredients.length}</span>{" "}
            ingredients
            {totalTime > 0 && (
              <>
                <IconPointFilled className="mx-1 mb-0.5 inline size-3" />
                <span className="font-semibold">{totalTime}m</span> total
              </>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
