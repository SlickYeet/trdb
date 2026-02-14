import type { CollectionConfig } from "payload"

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
    {
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.name) {
              data.slug = data.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]+/g, "")
            }
            return data
          },
        ],
      },
      name: "slug",
      type: "text",
    },
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
