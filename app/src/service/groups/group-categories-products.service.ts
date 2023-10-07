import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import {
  GroupCategory,
  GroupCategoriesProductsOutput,
  GroupProduct,
} from './types'

export class GroupCategoriesProductsService {
  async execute(): Promise<GroupCategoriesProductsOutput[]> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/groups/categories/products`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)

    return response.data.map((item: GroupCategoriesProductsOutput) => ({
      id: item.id,
      name: item.name,
      categories: item.categories.map((item: GroupCategory) => ({
        id: item.id,
        name: item.name,
        products: item.products.map((item: GroupProduct) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
        })),
      })),
    }))
  }
}
