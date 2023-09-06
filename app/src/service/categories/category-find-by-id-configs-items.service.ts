import { CategoryConfigsItemsOutput, Config } from '..'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class CategoryFindByIdConfigsItemsService {
  async execute(id: string): Promise<CategoryConfigsItemsOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/categories/${id}/configurations/items`,
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
      configurations: data.configurations.map((config: Config) => ({
        id: config.id,
        name: config.name,
        minimum: config.minimum,
        maximum: config.maximum,
        configurationItems: config.configurationItems.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
        })),
      })),
    }
  }
}
