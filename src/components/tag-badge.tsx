import Link from "next/link"
import type { Tag } from "payload-types"

interface TagBadgeProps {
  tag: Tag
  interactive?: boolean
}

export function TagBadge({ tag, interactive }: TagBadgeProps) {
  const color = tag.color || "#ed4b9b"

  if (!interactive) {
    return (
      <span
        className="inline-flex items-center rounded-full px-3 py-1 font-medium text-sm text-white"
        style={{ backgroundColor: color }}
      >
        {tag.name}
      </span>
    )
  }

  return (
    <Link href={`/recipes?tag=${tag.slug}`}>
      <span
        className="inline-flex cursor-pointer items-center rounded-full px-3 py-1 font-medium text-sm text-white transition-all hover:scale-105 hover:shadow-lg"
        style={{ backgroundColor: color }}
      >
        {tag.name}
      </span>
    </Link>
  )
}
