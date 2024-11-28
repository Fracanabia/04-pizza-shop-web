import { api } from '@/lib/axios'

interface getOrderDetailsParams {
  orderId: string
}

interface OrderDetailsResponse {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  id: string
  createdAt: Date
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
