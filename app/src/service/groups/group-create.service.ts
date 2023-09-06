import { GroupCreateInput } from '..'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class GroupCreateService {
  async execute(input: GroupCreateInput): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/groups`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data: input,
    }
    await httpClientAdapter.request(httpRequest)
  }
}
