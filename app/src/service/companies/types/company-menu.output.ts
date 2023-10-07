export type CompanyMenuOutput = {
  id: string
  name: string
  url: string
  groups: MenuGroup[]
}

export type MenuGroup = {
  id: string
  name: string
  categories: MenuCategory[]
}

export type MenuCategory = {
  id: string
  name: string
  products: MenuProduct[]
}

export type MenuProduct = {
  id: string
  name: string
  description: string
  price: number
}
