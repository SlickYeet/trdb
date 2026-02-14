import { FilterSidebar } from "@/components/modules/recipies/ui/filter-sidebar"
import { RecipeGrid } from "@/components/modules/recipies/ui/recipe-grid"
import { SearchBar } from "@/components/modules/recipies/ui/search-bar"
import { api } from "@/server/api"

export default async function RecipesPage() {
  const { docs: recipes, totalDocs: recipeCount } = await api.find({
    collection: "recipes",
    // TODO: add pagination, search, filter, and sort params
  })
  const { docs: tags } = await api.find({
    collection: "tags",
  })

  const tagsWithRecipeCounts = tags.map((tag) => {
    return { ...tag, recipeCount: new Array(recipeCount).fill(0) as number[] }
  })

  const loading = false
  const searchQuery = ""
  const selectedTags: string[] = []
  const sortBy: "newest" | "oldest" = "newest"

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
          <SearchBar
          // onSearch={setSearchQuery}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <FilterSidebar
              // onSortChange={setSortBy}
              // onTagChange={handleTagToggle}
              selectedTags={selectedTags}
              sortBy={sortBy}
              tags={tagsWithRecipeCounts}
            />
          </aside>

          <div className="lg:col-span-3">
            <RecipeGrid
              className="grid-cols-1 lg:grid-cols-2"
              loading={loading}
              recipes={recipes}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
