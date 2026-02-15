import { revalidatePath, updateTag } from "next/cache"
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload"
import type { Recipe } from "payload-types"

export const revalidateRecipes: CollectionAfterChangeHook<Recipe> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidation) {
    const path = `/recipes/${doc.slug}`

    payload.logger.info(`Revalidating path: ${path}`)

    revalidatePath(path)
    revalidatePath("/recipes")
    revalidatePath("/")
    updateTag("recipes")
  }

  if (previousDoc && previousDoc.slug !== doc.slug) {
    const oldPath = `/recipes/${previousDoc.slug}`

    payload.logger.info(`Revalidating old path: ${oldPath}`)

    revalidatePath(oldPath)
    revalidatePath("/recipes")
    revalidatePath("/")
    updateTag("recipes")
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Recipe> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidation) {
    const path = `/recipes/${doc.slug}`

    revalidatePath(path)
    revalidatePath("/recipes")
    revalidatePath("/")
    updateTag("recipes")
  }

  return doc
}
