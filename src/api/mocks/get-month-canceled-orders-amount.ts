import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrderAmountResponse } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrderAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrderAmountResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 250,
    diffFromLastMonth: -5,
  })
})
