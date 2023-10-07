import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { ConfigurationItemOutput } from './types'

export class ConfigurationItemFindByIdService {
  async execute(id: string): Promise<ConfigurationItemOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/configuration-items/${id}`,
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
      description: data.description,
      price: data.price,
      configuration: {
        id: data.configuration.id,
      },
    }
  }
}
