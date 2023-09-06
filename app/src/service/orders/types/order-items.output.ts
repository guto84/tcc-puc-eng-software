import { StatusEnum } from './status.enum'

export type OrderItemsOutput = {
  id: string
  name: string
  address: string
  addressNumber: string
  addressComplement?: string
  district: string
  zipcode: string
  phone: string
  status: StatusEnum
  createdAt: Date
  total: number
  orderItems: OrderItem[]
}

export type OrderItem = {
  id: string
  quantity: number
  subTotal: number
  product: {
    id: string
    name: string
    description?: string
    price?: number
  }
  orderConfigurations: OrderConfigurations[]
}

export type OrderConfigurations = {
  quantity: number
  subTotal: number
  configurationItem: {
    id: string
    name: string
    description: string
    price: number
  }
}
