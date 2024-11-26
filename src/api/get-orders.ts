import { api } from '@/lib/axios'

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

export const getOrders = async () => {
  const response = await api.get<OrderResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })

  return response.data
}
