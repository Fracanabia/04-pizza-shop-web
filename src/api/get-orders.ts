import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex: number | null
  orderId: string | null
  customerName: string | null
  status: string | null
}

interface OrderResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export const getOrders = async ({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) => {
  const response = await api.get<OrderResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })

  return response.data
}
