"use client"

import * as React from "react"

import { FilterSidebar } from "@/components/filter-sidebar"
import { RecipeGrid } from "@/components/recipe-grid"
import { SearchBar } from "@/components/search-bar"
import { recentRecipes } from "@/constants"
import type { Recipe, Tag } from "@/types"

export const dynamic = "force-dynamic"

export default function RecipesPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RecipesSuspense />
    </React.Suspense>
  )
}

export function RecipesSuspense() {
  const [recipes, setRecipes] = React.useState<Recipe[]>(recentRecipes)
  const [tags, setTags] = React.useState<Tag[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)
  const [searchQuery, setSearchQuery] = React.useState<string>("")
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [sortBy, setSortBy] = React.useState<"newest" | "oldest">("newest")

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-2 font-bold text-4xl text-foreground sm:text-5xl">
            All Recipes
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of recipes
            {selectedTags.length > 0 &&
              ` (${selectedTags.length} filter${selectedTags.length !== 1 ? "s" : ""} applied)`}
          </p>
        </div>

        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <FilterSidebar
              onSortChange={setSortBy}
              selectedTags={selectedTags}
              // onTagChange={handleTagToggle}
              sortBy={sortBy}
              tags={tags}
            />
          </aside>

          <div className="lg:col-span-3">
            <RecipeGrid loading={loading} recipes={recipes} />
          </div>
        </div>
      </div>
    </main>
  )
}
