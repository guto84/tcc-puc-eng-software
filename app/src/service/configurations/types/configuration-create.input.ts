export type ConfigurationCreateInput = {
  name: string
  minimum: number
  maximum: number
  category: {
    id: string
  }
}
