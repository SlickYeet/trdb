"use client"

import { IconPlus, IconX } from "@tabler/icons-react"
import type { Recipe } from "payload-types"
import * as React from "react"

import { FormField } from "./form/form-field"
import { FormInput } from "./form/form-input"

interface IngredientListProps {
  onChange: (ingredients: Recipe["ingredients"]) => void
}

export function IngredientList({ onChange }: IngredientListProps) {
  const [ingredients, setIngredients] = React.useState<Recipe["ingredients"]>([
    { id: "1", name: "", quantity: "" },
  ])

  function addIngredient() {
    const newIngredient = {
      id: Date.now().toString(),
      name: "",
      quantity: "",
    }
    const updated = [...(ingredients || []), newIngredient]
    setIngredients(updated)
    onChange(updated)
  }

  function removeIngredient(id: string) {
    const updated = ingredients?.filter((ing) => ing.id !== id)
    setIngredients(updated)
    onChange(updated)
  }

  function updateIngredient(
    id: string,
    field: "name" | "quantity",
    value: string,
  ) {
    const updated = ingredients?.map((ing) =>
      ing.id === id ? { ...ing, [field]: value } : ing,
    )
    setIngredients(updated)
    onChange(updated)
  }

  return (
    <FormField
      description="Add all ingredients with quantities"
      htmlFor="ingredients"
      label="Ingredients"
      required
    >
      <div className="space-y-3">
        {ingredients?.map((ingredient) => (
          <div className="flex items-start gap-2" key={ingredient.id}>
            <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
              <FormInput
                onChange={(e) =>
                  updateIngredient(ingredient.id || "", "name", e.target.value)
                }
                placeholder="Ingredient name"
                required
                value={ingredient.name}
              />
              <FormInput
                onChange={(e) =>
                  updateIngredient(
                    ingredient.id || "",
                    "quantity",
                    e.target.value,
                  )
                }
                placeholder="Quantity (e.g., 2 cups)"
                value={ingredient.quantity ?? ""}
              />
            </div>

            {ingredients.length > 1 && (
              <button
                className="mt-2 cursor-pointer rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                onClick={() => removeIngredient(ingredient.id || "")}
                type="button"
              >
                <IconX className="size-4" />
              </button>
            )}
          </div>
        ))}

        <button
          className="flex cursor-pointer items-center gap-2 font-medium text-sm transition-colors hover:text-foreground/80"
          onClick={addIngredient}
          type="button"
        >
          <IconPlus className="size-4" />
          Add Ingredient
        </button>
      </div>
    </FormField>
  )
}
