import { StatusEnum } from './status.enum'

export type OrderOutput = {
  id: string
  name: string
  address: string
  addressNumber: string
  addressComplement: string
  district: string
  zipcode: string
  phone: string
  status: StatusEnum
  createdAt: Date
  updatedAt: Date
}
