"use client"

import type { Recipe } from "payload-types"
import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface InstructionsSectionProps {
  instructions: Recipe["instructions"]
}

export function InstructionsSection({
  instructions,
}: InstructionsSectionProps) {
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({})

  function toggleStep(step: number) {
    setCheckedSteps((prev) => ({
      ...prev,
      [step]: !prev[step],
    }))
  }

  const sortedInstructions = [...(instructions || [])].sort(
    (a, b) => a.step - b.step,
  )

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-2xl text-foreground">Instructions</h2>
      <div className="space-y-3">
        {sortedInstructions.map((instruction) => {
          const isChecked = checkedSteps[instruction.step] || false

          return (
            <div
              className="group flex gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50"
              key={instruction.step}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  checked={isChecked}
                  className="mt-0.5"
                  onCheckedChange={() => toggleStep(instruction.step)}
                />
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-sm text-white">
                  {instruction.step}
                </div>
              </div>
              <p
                className={cn(
                  "flex-1 text-foreground leading-relaxed",
                  isChecked ? "text-muted-foreground line-through" : "",
                )}
              >
                {instruction.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
