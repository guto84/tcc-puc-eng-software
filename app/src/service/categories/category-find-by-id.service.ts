import { CategoryOutput } from '..'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class CategoryFindByIdService {
  async execute(id: string): Promise<CategoryOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/categories/${id}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)
    const { data } = response

    return {
      id: data.id,
      name: data.name,
      group: {
        id: data.group.id,
      },
    }
  }
}
