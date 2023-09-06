import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import {
  MenuCategory,
  CompanyMenuOutput,
  MenuProduct,
  MenuGroup,
} from './types'

export class CompanyMenuService {
  async execute(url: string): Promise<CompanyMenuOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/companies/${url}/menu`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const response = await httpClientAdapter.request(httpRequest)

    return {
      id: response.data.id,
      name: response.data.name,
      url: response.data.url,
      groups: response.data.groups.map((group: MenuGroup) => ({
        id: group.name,
        name: group.name,
        categories: group.categories.map((item: MenuCategory) => ({
          id: item.id,
          name: item.name,
          products: item.products.map((item: MenuProduct) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
          })),
        })),
      })),
    }
  }
}
