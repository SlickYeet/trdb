import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  LinkFeature,
  lexicalEditor,
  OrderedListFeature,
  UnorderedListFeature,
} from "@payloadcms/richtext-lexical"
import type { CollectionConfig } from "payload"

export const Recipes: CollectionConfig = {
  admin: {
    defaultColumns: ["title", "prepTime", "cookTime", "tags", "createdAt"],
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      required: true,
      type: "text",
    },
    {
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data?.title) {
              data.slug = data.title
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
        description: "Short summary of the recipe",
      },
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Preparation time in minutes",
        step: 1,
      },
      name: "prepTime",
      type: "number",
    },
    {
      admin: {
        description: "Cooking time in minutes",
        step: 1,
      },
      name: "cookTime",
      type: "number",
    },
    {
      admin: {
        description: "List of ingredients and quantities",
      },
      fields: [
        {
          name: "name",
          required: true,
          type: "text",
        },
        {
          admin: {
            description: "e.g. '2 cups', '1 tbsp'",
          },
          name: "quantity",
          type: "text",
        },
      ],
      name: "ingredients",
      type: "array",
    },
    {
      admin: {
        description: "Cooking steps in order",
      },
      fields: [
        {
          name: "description",
          required: true,
          type: "textarea",
        },
      ],
      name: "instructions",
      type: "array",
    },
    {
      admin: {
        description: "Categorize this recipe",
      },
      hasMany: true,
      name: "tags",
      relationTo: "tags",
      type: "relationship",
    },
    {
      admin: {
        description: "Personal notes, modifications, or observations",
      },
      editor: lexicalEditor({
        features({ rootFeatures }) {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            OrderedListFeature(),
            UnorderedListFeature(),
            LinkFeature(),
          ]
        },
      }),
      name: "notes",
      type: "richText",
    },
    {
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ data, operation }) => {
            if (operation === "create" && data) {
              data.createdAt = new Date().toISOString()
            }
            return data
          },
        ],
      },
      name: "createdAt",
      type: "date",
    },
  ],
  slug: "recipes",
}
