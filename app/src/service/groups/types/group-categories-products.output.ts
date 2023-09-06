export type GroupCategoriesProductsOutput = {
  id: string
  name: string
  categories: GroupCategory[]
}

export type GroupCategory = {
  id: string
  name: string
  products: GroupProduct[]
}

export type GroupProduct = {
  id: string
  name: string
  description: string
  price: number
}
