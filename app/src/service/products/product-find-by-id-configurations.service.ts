import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { Configuration, ProductConfigsItemsOutput } from './types'

export class ProductFindByIdConfigusItemsService {
  async execute(id: string): Promise<ProductConfigsItemsOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/products/${id}/configurations`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const response = await httpClientAdapter.request(httpRequest)
    const { data } = response

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      category: {
        id: data.category.id,
        name: data.category.name,
        configurations: data.category.configurations.map(
          (config: Configuration) => ({
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
          }),
        ),
      },
    }
  }
}
