import axios from 'axios'

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpRequest = {
  url: string
  method: HttpMethod
  timeout?: number
  data?: any
  headers?: any
  params?: any
}

export enum HttpStatusCode {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServerError = 500,
}

export type HttpResponse<T = any> = {
  status: HttpStatusCode
  data?: T
}

export type HttpClient<R = any> = {
  request: (httpRequest: HttpRequest) => Promise<HttpResponse<R>>
}

export const httpClientAdapter = {
  request: async (httpRequest: HttpRequest) => await axios.request(httpRequest),
}
