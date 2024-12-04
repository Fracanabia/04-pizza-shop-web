import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    name: 'Rocket Pizza',
    id: 'uuid-pizza',
    createdAt: new Date(),
    updatedAt: new Date(),
    description: 'description',
    managerId: 'uuid-manager',
  })
})
