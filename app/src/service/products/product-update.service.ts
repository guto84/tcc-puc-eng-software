import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { ProductUpdateInput } from './types'

export class ProductUpdateService {
  async execute(id: string, input: ProductUpdateInput): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/products/${id}`,
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
