export const config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  PAGE_SIZE: 20,
  USE_MOCKS: Boolean(process.env.NEXT_PUBLIC_USE_MOCK_SERVER),
}

import { authOptions } from './pages/api/auth/[...nextauth]'

export { authOptions }
