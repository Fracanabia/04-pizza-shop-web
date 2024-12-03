import { api } from '@/lib/axios'

export interface getOrderDetailsParams {
  orderId: string
}

export interface OrderDetailsResponse {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  id: string
  createdAt: string
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export const getOrderDetails = async ({ orderId }: getOrderDetailsParams) => {
  const response = await api.get<OrderDetailsResponse>(`/orders/${orderId}`)
  return response.data
}
