export type ProductCreateInput = {
  name: string
  description?: string | null
  price?: number | null
  category: {
    id: string
  }
}
