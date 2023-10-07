import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { ConfigurationOutput } from './types'

export class ConfigurationFindByIdService {
  async execute(id: string): Promise<ConfigurationOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/configurations/${id}`,
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
      minimum: data.minimum,
      maximum: data.maximum,
      category: {
        id: data.category.id,
      },
    }
  }
}
