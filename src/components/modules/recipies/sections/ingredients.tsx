"use client"

import type { Recipe } from "payload-types"
import * as React from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface IngredientsSectionProps {
  ingredients: Recipe["ingredients"]
}

export function IngredientsSection({ ingredients }: IngredientsSectionProps) {
  const [checkedItems, setCheckedItems] = React.useState<
    Record<string, boolean>
  >({})

  const toggleItem = (id: string | undefined) => {
    if (!id) return
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-2xl text-foreground">Ingredients</h2>
      <div className="space-y-2">
        {ingredients?.map((ingredient, index) => {
          const id = ingredient.id || `ingredient-${index}`
          const isChecked = checkedItems[id] || false

          return (
            <label
              className="group flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
              htmlFor={id}
              key={id}
            >
              <Checkbox
                checked={isChecked}
                className="mt-1"
                id={id}
                onCheckedChange={() => toggleItem(id)}
              />
              <div className="min-w-0 flex-1">
                {ingredient.quantity && (
                  <span className="font-semibold text-foreground">
                    {ingredient.quantity}
                  </span>
                )}
                <span
                  className={cn(
                    "ml-2",
                    isChecked
                      ? "text-muted-foreground line-through"
                      : "text-foreground",
                  )}
                >
                  {ingredient.name}
                </span>
              </div>
            </label>
          )
        })}
      </div>
    </div>
  )
}
