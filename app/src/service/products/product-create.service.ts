import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { ProductCreateInput } from './types'

export class ProductCreateService {
  async execute(input: ProductCreateInput): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/products`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data: input,
    }
    await httpClientAdapter.request(httpRequest)
  }
}
