"use client"

import { IconLoader2 } from "@tabler/icons-react"
import Form from "next/form"
import Link from "next/link"
import type { Recipe, Tag } from "payload-types"
import * as React from "react"

import { createRecipe } from "@/actions/recipe"

import { FormField } from "./form/form-field"
import { FormInput } from "./form/form-input"
import { FormTextarea } from "./form/form-textarea"
import { IngredientList } from "./ingredient-list"
import { InstructionList } from "./instruction-list"
import { TagSelector } from "./tag-selector"

interface AddRecipeFormProps {
  availableTags: Tag[]
}

export function AddRecipeForm({ availableTags }: AddRecipeFormProps) {
  const [ingredients, setIngredients] = React.useState<Recipe["ingredients"]>(
    [],
  )
  const [instructions, setInstructions] = React.useState<
    Recipe["instructions"]
  >([])
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)

    try {
      formData.append(
        "ingredients",
        JSON.stringify(
          ingredients
            ?.filter((ing) => ing.name.trim())
            .map(({ name, quantity }) => ({ name, quantity })),
        ),
      )

      formData.append(
        "instructions",
        JSON.stringify(
          instructions
            ?.filter((inst) => inst.description.trim())
            .map(({ step, description }) => ({ description, step })),
        ),
      )

      formData.append("tags", selectedTags.join(","))

      await createRecipe(formData)
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to create recipe. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form action={handleSubmit} className="space-y-6">
      <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="space-y-4">
          <h2 className="border-border border-b pb-2 font-semibold text-foreground text-lg">
            Basic Information
          </h2>

          <FormField htmlFor="title" label="Recipe Title" required>
            <FormInput
              id="title"
              name="title"
              placeholder="e.g., Grandma's Chocolate Chip Cookies"
              required
            />
          </FormField>

          <FormField
            description="A brief description of the dish"
            htmlFor="description"
            label="Description"
          >
            <FormTextarea
              className="resize-none"
              id="description"
              name="description"
              placeholder="What makes this recipe special?"
            />
          </FormField>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              description="Time to prepare ingredients"
              htmlFor="prepTime"
              label="Prep Time (minutes)"
            >
              <FormInput
                id="prepTime"
                min="0"
                name="prepTime"
                placeholder="15"
                type="number"
              />
            </FormField>

            <FormField
              description="Time to cook/bake"
              htmlFor="cookTime"
              label="Cook Time (minutes)"
            >
              <FormInput
                id="cookTime"
                min="0"
                name="cookTime"
                placeholder="30"
                type="number"
              />
            </FormField>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="border-border border-b pb-2 font-semibold text-foreground text-lg">
            Categories
          </h2>

          <TagSelector
            availableTags={availableTags}
            onChange={setSelectedTags}
          />
        </div>

        <div className="space-y-4">
          <h2 className="border-border border-b pb-2 font-semibold text-foreground text-lg">
            Ingredients
          </h2>

          <IngredientList onChange={setIngredients} />
        </div>

        <div className="space-y-4">
          <h2 className="border-border border-b pb-2 font-semibold text-foreground text-lg">
            Instructions
          </h2>

          <InstructionList onChange={setInstructions} />
        </div>

        <div className="space-y-4">
          <h2 className="border-border border-b pb-2 font-semibold text-foreground text-lg">
            Personal Notes
          </h2>

          <FormField
            description="Any tips, substitutions, or personal touches"
            htmlFor="notes"
            label="Notes"
          >
            <FormTextarea
              className="min-h-30"
              id="notes"
              name="notes"
              placeholder="Add any personal notes or variations..."
            />
          </FormField>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4">
          <p className="text-destructive text-sm">{error}</p>
        </div>
      )}

      <div className="flex justify-end gap-3">
        <Link href="/recipes">
          <button
            className="cursor-pointer rounded-xl border border-border bg-card px-6 py-3 font-medium text-foreground transition-colors hover:bg-muted"
            disabled={isSubmitting}
            type="button"
          >
            Cancel
          </button>
        </Link>

        <button
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-secondary px-6 py-3 font-medium shadow-md transition-all hover:bg-secondary/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <>
              <IconLoader2 className="size-4 animate-spin" />
              Creating...
            </>
          ) : (
            "Create Recipe"
          )}
        </button>
      </div>
    </Form>
  )
}
