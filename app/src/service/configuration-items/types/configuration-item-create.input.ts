export type ConfigurationItemCreateInput = {
  name: string
  description: string | null
  price: number | null
  configuration: {
    id: string
  }
}
