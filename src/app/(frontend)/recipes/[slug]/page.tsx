import { IconArrowLeft, IconChefHat, IconClock } from "@tabler/icons-react"
import Link from "next/link"
import { notFound } from "next/navigation"

import { IngredientsSection } from "@/components/modules/recipies/sections/ingredients"
import { InstructionsSection } from "@/components/modules/recipies/sections/instructions"
import { TagBadge } from "@/components/tag-badge"
import { recentRecipes } from "@/constants"

export async function generateMetadata(props: PageProps<"/recipes/[slug]">) {
  const { slug } = await props.params

  // const recipe = await getRecipeBySlug(slug)
  const recipe = recentRecipes.find((r) => r.slug === slug)

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    }
  }

  return {
    description: recipe.description || `Recipe for ${recipe.title}`,
    title: `${recipe.title} | The Recipe DB`,
  }
}

export async function generateStaticParams() {
  try {
    // const res = await getAllRecipes()
    // return (res.docs || []).map((recipe) => ({
    //   slug: recipe.slug,
    // }))

    return recentRecipes.map((recipe) => ({
      slug: recipe.slug,
    }))
  } catch (error) {
    console.error("Failed to generate static params:", error)
    return []
  }
}

export default async function RecipePage(props: PageProps<"/recipes/[slug]">) {
  const { slug } = await props.params

  // const recipe = await getRecipeBySlug(slug)
  const recipe = recentRecipes.find((r) => r.slug === slug)

  if (!recipe) notFound()

  const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0)

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Link
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground/80"
          href="/recipes"
        >
          <IconArrowLeft className="size-4" />
          Back to recipes
        </Link>

        <div className="mb-12 space-y-4">
          <h1 className="text-balance font-bold text-4xl text-foreground sm:text-5xl">
            {recipe.title}
          </h1>

          {recipe.description && (
            <p className="text-balance text-lg text-muted-foreground">
              {recipe.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-4 sm:gap-6">
            {recipe.prepTime && (
              <div className="flex items-center gap-2">
                <IconClock className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground text-sm">Prep Time</p>
                  <p className="font-semibold text-foreground">
                    {recipe.prepTime} mins
                  </p>
                </div>
              </div>
            )}

            {recipe.cookTime && (
              <div className="flex items-center gap-2">
                <IconChefHat className="size-5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground text-sm">Cook Time</p>
                  <p className="font-semibold text-foreground">
                    {recipe.cookTime} mins
                  </p>
                </div>
              </div>
            )}

            {totalTime > 0 && (
              <div className="flex items-center gap-2">
                <div className="flex size-5 items-center justify-center rounded-full bg-secondary/20">
                  <span className="font-bold text-muted-foreground text-xs">
                    ∑
                  </span>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Total Time</p>
                  <p className="font-semibold text-foreground">
                    {totalTime} mins
                  </p>
                </div>
              </div>
            )}
          </div>

          {recipe.tags && recipe.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {recipe.tags.map((tag) => (
                <TagBadge
                  interactive
                  key={typeof tag === "string" ? tag : tag.id}
                  tag={tag}
                />
              ))}
            </div>
          )}
        </div>

        <div className="my-12 border-border border-t" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <IngredientsSection ingredients={recipe.ingredients} />
            </div>
          </div>

          <div className="space-y-12 lg:col-span-2">
            <InstructionsSection instructions={recipe.instructions} />

            {recipe.notes && (
              <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">Notes</h2>
                <div className="prose prose-sm max-w-none rounded-xl border border-secondary/20 bg-secondary/5 p-6 text-foreground">
                  {recipe.notes}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 border-border border-t pt-12 text-center">
          <p className="mb-4 text-muted-foreground">Made this recipe?</p>
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95"
            href="/recipes"
          >
            Find more recipes
          </Link>
        </div>
      </div>
    </main>
  )
}
