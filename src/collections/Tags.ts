import type { CollectionConfig } from "payload"

import { slugField } from "@/fields/slug"

export const Tags: CollectionConfig = {
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      required: true,
      type: "text",
      unique: true,
    },
    ...slugField(),
    {
      admin: {
        description: "Hex color for tag display",
      },
      defaultValue: "#ed4b9b",
      name: "color",
      type: "text",
    },
  ],
  slug: "tags",
}
