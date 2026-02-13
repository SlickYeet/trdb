// TODO: Replace with generated types from Payload CMS once available

export interface Ingredient {
  name: string
  quantity?: string
  id?: string
}

export interface Instruction {
  step: number
  description: string
  id?: string
}

export interface Tag {
  id: string
  name: string
  slug: string
  color?: string
}

export interface Recipe {
  id: string
  title: string
  slug: string
  description?: string
  prepTime?: number
  cookTime?: number
  ingredients: Ingredient[]
  instructions: Instruction[]
  tags?: Tag[] | string[]
  notes?: string
  createdAt: string
  updatedAt?: string
}

export interface RecipesResponse {
  docs: Recipe[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}
