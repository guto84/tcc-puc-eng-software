import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { CompanyOutput } from './types'

export class CompanyFindAllService {
  async execute(): Promise<CompanyOutput[]> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/companies`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)

    return response.data.map((item: CompanyOutput) => ({
      id: item.id,
      name: item.name,
      url: item.url,
    }))
  }
}
