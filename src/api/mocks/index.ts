import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthCanceledOrderAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products'
import { getProfileMock } from './get-profile.mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getMonthCanceledOrderAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
)

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
