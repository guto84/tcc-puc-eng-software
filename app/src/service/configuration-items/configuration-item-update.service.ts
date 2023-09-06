import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { ConfigurationItemUpdateInput } from './types'

export class ConfigurationItemUpdateService {
  async execute(
    id: string,
    input: ConfigurationItemUpdateInput,
  ): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/configuration-items/${id}`,
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
