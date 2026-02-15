import { IconArrowLeft } from "@tabler/icons-react"
import type { Metadata } from "next"
import Link from "next/link"

import { AddRecipeForm } from "@/components/modules/recipies/ui/add-recipe-form"
import { api } from "@/server/api"

export const metadata: Metadata = {
  description: "Add a new recipe to your collection",
  title: "Add New Recipe | The Recipe DB",
}

export default async function AddRecipePage() {
  const { docs: tags } = await api.find({
    collection: "tags",
  })

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <Link
            className="mb-4 inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
            href="/recipes"
          >
            <IconArrowLeft className="size-4" />
            Back to recipes
          </Link>
          <h1 className="mb-2 font-bold text-4xl text-foreground">
            Add New Recipe
          </h1>
          <p className="text-muted-foreground">
            Quickly save your recipe for future cooking sessions
          </p>
        </div>

        <AddRecipeForm availableTags={tags} />
      </div>
    </main>
  )
}
