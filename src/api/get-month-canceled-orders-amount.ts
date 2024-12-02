import { api } from '@/lib/axios'

export interface GetMonthCanceledOrderAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export const getMonthCanceledOrderAmount = async () => {
  const response = await api.get<GetMonthCanceledOrderAmountResponse>(
    'metrics/month-canceled-orders-amount',
  )
  return response.data
}
