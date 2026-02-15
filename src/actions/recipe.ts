"use server"

import { redirect } from "next/navigation"
import type { Recipe } from "payload-types"

import { formatSlug } from "@/lib/format-slug"
import { api } from "@/server/api"

export async function createRecipe(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const prepTime = formData.get("prepTime") as string
  const cookTime = formData.get("cookTime") as string
  const notes = formData.get("notes") as string

  const ingredientsJson = formData.get("ingredients") as string
  const ingredients: Recipe["ingredients"] = ingredientsJson
    ? JSON.parse(ingredientsJson)
    : []

  const instructionsJson = formData.get("instructions") as string
  const instructions: Recipe["instructions"] = instructionsJson
    ? JSON.parse(instructionsJson)
    : []

  const tagsString = formData.get("tags") as string
  const tagIds = tagsString
    ? tagsString.split(",").filter(Boolean).map(Number)
    : []

  const notesObject = notes
    ? {
        root: {
          children: [
            {
              children: [
                {
                  text: notes,
                  type: "text",
                },
              ],
              type: "paragraph",
              version: 1,
            },
          ],
          direction: "ltr" as const,
          format: "" as const,
          indent: 0,
          type: "root",
          version: 1,
        },
      }
    : undefined

  let recipe: Recipe
  try {
    recipe = await api.create({
      collection: "recipes",
      data: {
        cookTime: cookTime ? parseInt(cookTime, 10) : undefined,
        description,
        ingredients,
        instructions,
        notes: notesObject,
        prepTime: prepTime ? parseInt(prepTime, 10) : undefined,
        tags: tagIds.length > 0 ? tagIds : undefined,
        title,
      },
    })
  } catch (error) {
    console.error("Error creating recipe:", error)
    throw new Error("Failed to create recipe.")
  }

  const slug = recipe.slug || formatSlug(title)
  redirect(`/recipes/${slug}`)
}
