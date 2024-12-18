import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      name: 'johndoe',
      id: 'uuid-profile',
      email: 'johndoe@example.com',
      phone: '49 9 9999-9999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  },
)
