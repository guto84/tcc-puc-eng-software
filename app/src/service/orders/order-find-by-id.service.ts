import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { OrderConfigurations, OrderItem, OrderItemsOutput } from './types'

export class OrderFindByIdService {
  async execute(id: string): Promise<OrderItemsOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/orders/${id}`,
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
      address: data.address,
      addressNumber: data.addressNumber,
      addressComplement: data.addressComplement,
      district: data.district,
      zipcode: data.zipcode,
      phone: data.phone,
      status: data.status,
      createdAt: data.createdAt,
      total: data.total,
      orderItems: data.orderItems.map((item: OrderItem) => ({
        id: item.id,
        quantity: item.quantity,
        subTotal: item.subTotal,
        product: {
          id: item.product.id,
          name: item.product.name,
          description: item.product.description,
          price: item.product.price,
        },
        orderConfigurations: item.orderConfigurations.map(
          (config: OrderConfigurations) => ({
            quantity: config.quantity,
            subTotal: config.subTotal,
            configurationItem: {
              id: config.configurationItem.id,
              name: config.configurationItem.name,
              description: config.configurationItem.description,
              price: config.configurationItem.price,
            },
          }),
        ),
      })),
    }
  }
}
