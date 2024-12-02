import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 200000 },
    { date: '02/01/2024', receipt: 222000 },
    { date: '03/01/2024', receipt: 44000 },
    { date: '04/01/2024', receipt: 44000 },
    { date: '05/01/2024', receipt: 55000 },
  ])
})
