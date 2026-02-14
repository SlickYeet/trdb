import { IconBook, IconClock, IconSparkles } from "@tabler/icons-react"

interface FeaturesSectionProps {
  recipeLength: number
}

export function FeaturesSection({ recipeLength = 0 }: FeaturesSectionProps) {
  const FEATURES = [
    {
      description: "Recipes Collected",
      icon: <IconBook className="mx-auto mb-2 size-8 text-primary" />,
      title: `${recipeLength}+`,
    },
    {
      description: "To Add",
      icon: <IconClock className="mx-auto mb-2 size-8 text-primary" />,
      title: "Quick",
    },
    {
      description: "Inspiring",
      icon: <IconSparkles className="mx-auto mb-2 size-8 text-primary" />,
      title: "Always",
    },
  ]

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <div
              className="rounded-2xl bg-card p-6 text-center ring-2 ring-border transition-colors duration-200"
              key={i}
            >
              {feature.icon}
              <p className="font-bold text-3xl text-foreground">
                {feature.title}
              </p>
              <p className="mt-1 text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
