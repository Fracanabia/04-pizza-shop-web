import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza X', amount: 2 },
    { product: 'Pizza Y', amount: 4 },
    { product: 'Pizza Z', amount: 7 },
    { product: 'Pizza K', amount: 9 },
    { product: 'Pizza XKW', amount: 21 },
  ])
})
