"use client"

import { IconPlus, IconX } from "@tabler/icons-react"
import type { Recipe } from "payload-types"
import * as React from "react"

import { FormField } from "./form/form-field"
import { FormTextarea } from "./form/form-textarea"

interface InstructionListProps {
  onChange: (instructions: Recipe["instructions"]) => void
}

export function InstructionList({ onChange }: InstructionListProps) {
  const [instructions, setInstructions] = React.useState<
    Recipe["instructions"]
  >([{ description: "", id: "1", step: 1 }])

  function addInstruction() {
    const newInstruction = {
      description: "",
      id: Date.now().toString(),
      step: (instructions ?? []).length + 1,
    }
    const updated = [...(instructions || []), newInstruction]
    setInstructions(updated)
    onChange(updated)
  }

  function removeInstruction(id: string) {
    const updated = instructions
      ?.filter((inst) => inst.id !== id)
      .map((inst, index) => ({ ...inst, step: index + 1 }))
    setInstructions(updated)
    onChange(updated)
  }

  function updateInstruction(id: string, value: string) {
    const updated = instructions?.map((inst) =>
      inst.id === id ? { ...inst, description: value } : inst,
    )
    setInstructions(updated)
    onChange(updated)
  }

  return (
    <FormField
      description="Add step-by-step cooking instructions"
      htmlFor="instructions"
      label="Instructions"
      required
    >
      <div className="space-y-3">
        {instructions?.map((instruction) => (
          <div className="flex items-start gap-3" key={instruction.id}>
            <div className="mt-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary/40 font-bold text-muted-foreground text-sm">
              {instruction.step}
            </div>
            <div className="flex-1">
              <FormTextarea
                className="min-h-20 resize-none"
                onChange={(e) =>
                  updateInstruction(instruction.id || "", e.target.value)
                }
                placeholder="Describe this step..."
                required
                value={instruction.description}
              />
            </div>
            {instructions.length > 1 && (
              <button
                className="mt-2 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                onClick={() => removeInstruction(instruction.id || "")}
                type="button"
              >
                <IconX className="size-4" />
              </button>
            )}
          </div>
        ))}

        <button
          className="flex items-center gap-2 font-medium text-sm transition-colors hover:text-foreground/80"
          onClick={addInstruction}
          type="button"
        >
          <IconPlus className="size-4" />
          Add Step
        </button>
      </div>
    </FormField>
  )
}
