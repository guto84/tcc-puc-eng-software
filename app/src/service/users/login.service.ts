import { LoginInput } from '..'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { LoginOutput } from './types'

export class LoginService {
  async execute(input: LoginInput): Promise<LoginOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/oauth2/token`,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic bXljbGllbnRpZDpteWNsaWVudHNlY3JldA==',
      },
      data: {
        username: input.email,
        password: input.password,
        grant_type: 'password',
      },
    }

    const response = await httpClientAdapter.request(httpRequest)

    return {
      accessToken: response.data.access_token,
    }
  }
}
