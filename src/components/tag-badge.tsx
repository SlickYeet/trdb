import Link from "next/link"

import type { Tag } from "@/types"

interface TagBadgeProps {
  tag: Tag | string
  interactive?: boolean
}

export function TagBadge({ tag, interactive }: TagBadgeProps) {
  const tagObj =
    typeof tag === "string" ? { id: tag, name: tag, slug: tag } : tag
  const color = tagObj.color || "#ed4b9b"

  if (!interactive) {
    return (
      <span
        className="inline-flex items-center rounded-full px-3 py-1 font-medium text-sm text-white transition-colors hover:opacity-90"
        style={{ backgroundColor: color }}
      >
        {tagObj.name}
      </span>
    )
  }

  return (
    <Link href={`/recipes?tag=${tagObj.slug}`}>
      <span
        className="inline-flex cursor-pointer items-center rounded-full px-3 py-1 font-medium text-sm text-white transition-all hover:scale-105 hover:shadow-lg"
        style={{ backgroundColor: color }}
      >
        {tagObj.name}
      </span>
    </Link>
  )
}
