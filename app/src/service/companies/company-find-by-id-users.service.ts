import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { CompanyUsersOutput, User } from './types'

export class CompanyFindByIdUsersService {
  async execute(id: string): Promise<CompanyUsersOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/companies/${id}/users`,
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
      url: data.url,
      users: data.users.map((user: User) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      })),
    }
  }
}
