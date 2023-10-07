import { UserUpdateInput } from '..'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class UserUpdateService {
  async execute(id: string, input: UserUpdateInput): Promise<void> {
    const data = {
      ...input,
      roles: input.roles.map((item: string) => ({
        id: item,
      })),
    }
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/users/${id}`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data,
    }
    await httpClientAdapter.request(httpRequest)
  }
}
