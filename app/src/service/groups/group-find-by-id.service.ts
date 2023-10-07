import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { GroupOutput } from './types'

export class GroupFindByIdService {
  async execute(id: string): Promise<GroupOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/groups/${id}`,
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
    }
  }
}
