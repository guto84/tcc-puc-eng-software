import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class UserDeleteService {
  async execute(id: string): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/users/${id}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
    await httpClientAdapter.request(httpRequest)
  }
}
