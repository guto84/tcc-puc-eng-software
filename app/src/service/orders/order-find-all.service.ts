import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { OrderOutput } from './types'

type Output = { content: OrderOutput[] } & { totalPages: number } & {
  totalElements: number
} & {
  offset: number
} & { page: number }

export class OrderFindAllService {
  async execute(page: number): Promise<Output> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/orders?page=${page - 1}&size=10`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)

    return {
      content: response.data.content.map((item: OrderOutput) => ({
        id: item.id,
        name: item.name,
        address: item.address,
        addressNumber: item.addressNumber,
        addressComplement: item.addressComplement,
        district: item.district,
        zipcode: item.zipcode,
        phone: item.phone,
        status: item.status,
      })),
      totalPages: response.data.totalPages,
      totalElements: response.data.totalElements,
      offset: response.data.size,
      page: response.data.number,
    }
  }
}
