"use client"

import { IconChevronDown } from "@tabler/icons-react"
import type { Tag } from "payload-types"
import * as React from "react"

import { cn } from "@/lib/utils"

interface FilterSidebarProps {
  tags: (Tag & { recipeCount?: number[] })[]
  selectedTags: string[]
  // onTagChange: (tagId: string) => void
  sortBy: "newest" | "oldest"
  // onSortChange: (sort: "newest" | "oldest") => void
}

export function FilterSidebar({
  tags,
  selectedTags,
  // onTagChange,
  sortBy,
  // onSortChange,
}: FilterSidebarProps) {
  const [expandedSort, setExpandedSort] = React.useState<boolean>(true)
  const [expandedTags, setExpandedTags] = React.useState<boolean>(true)

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-4">
        <button
          className="flex w-full items-center justify-between font-semibold text-foreground text-sm transition-colors hover:text-muted-foreground"
          onClick={() => setExpandedSort(!expandedSort)}
          type="button"
        >
          Sort By
          <IconChevronDown
            className={cn(
              "size-4 transition-transform",
              expandedSort ? "rotate-180" : "",
            )}
          />
        </button>
        {expandedSort && (
          <div className="mt-4 space-y-2">
            {[
              { label: "Newest First", value: "newest" },
              { label: "Oldest First", value: "oldest" },
            ].map((option) => (
              <label
                className="group flex cursor-pointer items-center gap-3"
                key={option.value}
              >
                <input
                  checked={sortBy === option.value}
                  className="h-4 w-4 text-secondary accent-secondary"
                  name="sort"
                  onChange={() => {
                    // onSortChange(option.value as "newest" | "oldest")
                  }}
                  type="radio"
                  value={option.value}
                />
                <span className="text-muted-foreground text-sm transition-colors group-hover:text-foreground">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <button
          className="flex w-full items-center justify-between font-semibold text-foreground text-sm transition-colors hover:text-muted-foreground"
          onClick={() => setExpandedTags(!expandedTags)}
          type="button"
        >
          Categories
          <IconChevronDown
            className={cn(
              "size-4 transition-transform",
              expandedTags ? "rotate-180" : "",
            )}
          />
        </button>
        {expandedTags && (
          <div className="mt-4 max-h-64 space-y-2 overflow-y-auto">
            {tags.length === 0 ? (
              <p className="text-muted-foreground text-sm">No categories yet</p>
            ) : (
              tags.map((tag) => (
                <label
                  className="group flex cursor-pointer items-center gap-3"
                  key={tag.id}
                >
                  <input
                    checked={selectedTags.includes(String(tag.id))}
                    className="size-4 rounded text-secondary accent-secondary"
                    // onChange={() => onTagChange(String(tag.id))}
                    type="checkbox"
                  />
                  <span
                    className="inline-block size-3 rounded-full"
                    style={{ backgroundColor: "#ed4b9b" }}
                  />
                  <span className="flex-1 text-muted-foreground text-sm transition-colors group-hover:text-foreground">
                    {tag.name}
                  </span>
                  <span className="text-muted-foreground/50 text-xs">
                    {/* Recipe count would go here if we had it */}
                    {`(${tag.recipeCount?.length || 0})`}
                  </span>
                </label>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
