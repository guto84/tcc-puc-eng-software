import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { OrderUpdateInput } from './types/order-update-input'

export class OrderUpdateService {
  async execute(id: string, input: OrderUpdateInput): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/orders/${id}`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data: input,
    }
    await httpClientAdapter.request(httpRequest)
  }
}
