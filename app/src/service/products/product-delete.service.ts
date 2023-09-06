import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class ProductDeleteService {
  async execute(id: string): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/products/${id}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
    await httpClientAdapter.request(httpRequest)
  }
}
