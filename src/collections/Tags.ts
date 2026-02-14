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
    ...slugField("name"),
  ],
  slug: "tags",
}
