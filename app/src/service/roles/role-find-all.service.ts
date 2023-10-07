import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { RoleOutput } from './types/role.output'

export class RoleFindAllService {
  async execute(): Promise<RoleOutput[]> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/roles`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)

    return response.data.map((item: any) => ({
      id: item.id,
      authority: item.authority,
    }))
  }
}
