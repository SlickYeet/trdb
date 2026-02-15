"use client"

import { IconCheck } from "@tabler/icons-react"
import type { Tag } from "payload-types"
import * as React from "react"

import { cn } from "@/lib/utils"

import { FormField } from "./form/form-field"

interface TagSelectorProps {
  onChange: (tagIds: string[]) => void
  availableTags: Tag[]
}

export function TagSelector({ onChange, availableTags }: TagSelectorProps) {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    if (availableTags.length > 0) {
      setLoading(false)
    }
  }, [availableTags])

  function toggleTag(tagId: string) {
    const updated = selectedTags.includes(tagId)
      ? selectedTags.filter((id) => id !== tagId)
      : [...selectedTags, tagId]
    setSelectedTags(updated)
    onChange(updated)
  }

  if (loading) {
    return (
      <FormField
        description="Categorize your recipe"
        htmlFor="tags"
        label="Tags"
      >
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3].map((i) => (
            <div
              className="h-9 w-24 animate-shimmer rounded-full bg-muted"
              key={i}
            />
          ))}
        </div>
      </FormField>
    )
  }

  return (
    <FormField
      description="Select categories for your recipe"
      htmlFor="tags"
      label="Tags"
    >
      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => {
          const isSelected = selectedTags.includes(String(tag.id))

          return (
            <button
              className={cn(
                "rounded-full bg-primary/20 px-4 py-2 font-medium text-sm transition-all",
                "flex cursor-pointer items-center gap-1.5 border-2",
                isSelected
                  ? "scale-105 border-primary/50 text-foreground/90 shadow-md"
                  : "border-transparent text-primary hover:scale-105",
              )}
              key={tag.id}
              onClick={() => toggleTag(String(tag.id))}
              type="button"
            >
              {isSelected && <IconCheck className="size-3.5" />}
              {tag.name}
            </button>
          )
        })}
      </div>
    </FormField>
  )
}
