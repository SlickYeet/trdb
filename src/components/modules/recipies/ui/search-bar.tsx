"use client"

import { IconSearch, IconX } from "@tabler/icons-react"
import * as React from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function SearchBar({
  onSearch,
  placeholder = "Search recipes by name or ingredient...",
}: SearchBarProps) {
  const [value, setValue] = React.useState<string>("")

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setValue(newValue)
      onSearch(newValue)
    },
    [onSearch],
  )

  const handleClear = React.useCallback(() => {
    setValue("")
    onSearch("")
  }, [onSearch])

  return (
    <div className="relative w-full">
      <div className="relative">
        <IconSearch className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          className="w-full rounded-xl border border-border bg-background py-3 pr-10 pl-10 text-foreground transition-colors placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          onChange={handleChange}
          placeholder={placeholder}
          type="text"
          value={value}
        />
        {value && (
          <button
            aria-label="Clear search"
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            onClick={handleClear}
            type="button"
          >
            <IconX className="size-5" />
          </button>
        )}
      </div>
    </div>
  )
}
