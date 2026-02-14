import { CtaSection } from "@/components/modules/landing/sections/cta"
import { FeaturesSection } from "@/components/modules/landing/sections/features"
import { HeroSection } from "@/components/modules/landing/sections/hero"
import { RecentRecipesSection } from "@/components/modules/landing/sections/recent-recipes"
import { api } from "@/server/api"

export default async function HomePage() {
  const { docs, totalDocs } = await api.find({
    collection: "recipes",
    limit: 6,
    sort: "-createdAt",
  })

  return (
    <main className="min-h-screen bg-linear-to-b from-background to-muted/30">
      <HeroSection />
      <FeaturesSection recipeLength={totalDocs} />
      <RecentRecipesSection recentRecipes={docs} />
      <CtaSection />
    </main>
  )
}
