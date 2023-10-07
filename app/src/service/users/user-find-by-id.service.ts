import { UserRolesOutput } from '..'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class UserFindByIdService {
  async execute(id: string): Promise<UserRolesOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/users/${id}`,
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
      email: data.email,
      roles: data.roles,
    }
  }
}
