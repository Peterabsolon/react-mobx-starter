import { useRouter } from 'next/router'

export const UnexpectedErrorPage = () => {
  const router = useRouter()

  console.log('[UnexpectedError]: ', router.query['error'])

  return <div>Unexpected error</div>
}
