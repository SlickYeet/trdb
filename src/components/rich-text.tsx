import type {
  DefaultNodeTypes,
  SerializedLinkNode,
} from "@payloadcms/richtext-lexical"
import type { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react"
import {
  LinkJSXConverter,
  RichText as RichTextComponent,
} from "@payloadcms/richtext-lexical/react"
import type { SerializedEditorState } from "node_modules/lexical/LexicalEditorState"

import { cn } from "@/lib/utils"

function internalDocToHref({ linkNode }: { linkNode: SerializedLinkNode }) {
  const { value, relationTo } = linkNode.fields.doc || {}

  if (typeof value !== "object") {
    throw new Error("Expected value to be an object")
  }

  const slug = value.slug

  let href: string = ""
  switch (relationTo) {
    case "recipes":
      href = `/recipes/${slug}`
      break
    default:
      href = `/${slug}`
      break
  }

  return href
}

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
})

interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  data: SerializedEditorState
  enableGutter?: boolean
  enableProse?: boolean
}

export function RichText(props: RichTextProps) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props

  return (
    <RichTextComponent
      className={cn(
        enableGutter ? "container" : "max-w-none",
        enableProse && "prose prose-sm dark:prose-invert max-w-none",
        className,
      )}
      converters={jsxConverters}
      {...rest}
    />
  )
}
