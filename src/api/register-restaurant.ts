import { api } from '@/lib/axios'

interface RegisterRestaurant {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}
export const registerRestaurant = async ({
  restaurantName,
  managerName,
  phone,
  email,
}: RegisterRestaurant) => {
  await api.post('restaurants', {
    restaurantName,
    managerName,
    phone,
    email,
  })
}
