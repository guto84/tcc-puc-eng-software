import { CategoryCreateInput } from '..'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class CategoryCreateService {
  async execute(input: CategoryCreateInput): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/categories`,
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
