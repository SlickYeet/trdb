import type { LinkFields } from "@payloadcms/richtext-lexical"
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  lexicalEditor,
  ParagraphFeature,
  UnderlineFeature,
} from "@payloadcms/richtext-lexical"
import type { Config, TextFieldSingleValidation } from "payload"

export const defaultLexical: Config["editor"] = lexicalEditor({
  features() {
    return [
      ParagraphFeature(),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      LinkFeature({
        enabledCollections: ["recipes"],
        fields({ defaultFields }) {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ("name" in field && field.name === "url") return false
            return true
          })

          return [
            ...defaultFieldsWithoutUrl,
            {
              admin: {
                condition: (_data, siblingData) =>
                  siblingData?.linkType !== "internal",
              },
              label: ({ t }) => t("fields:enterURL"),
              name: "url",
              required: true,
              type: "text",
              validate: ((val, opts) => {
                if (
                  (opts?.siblingData as LinkFields)?.linkType === "internal"
                ) {
                  return true
                }
                return val ? true : "URL is required"
              }) as TextFieldSingleValidation,
            },
          ]
        },
      }),
    ]
  },
})
