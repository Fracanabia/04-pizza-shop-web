import { http, HttpResponse } from 'msw'

import {
  getOrderDetailsParams,
  OrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  getOrderDetailsParams,
  never,
  OrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    status: 'pending',
    id: params.orderId,
    createdAt: new Date().toISOString(),
    totalInCents: 1000,
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '(11) 99999-9999',
    },
    orderItems: [
      {
        id: '1234',
        priceInCents: 500,
        quantity: 2,
        product: {
          name: 'Product 1',
        },
      },
      {
        id: '5678',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Product 2',
        },
      },
    ],
  })
})
