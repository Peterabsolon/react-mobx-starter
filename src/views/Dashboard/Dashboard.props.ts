import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'

import { mocks } from './Dashboard.mocks'
import { IDashboardServerSideProps } from './Dashboard.types'

import { authOptions, config } from '~/config'

export const getServerSideProps: GetServerSideProps<IDashboardServerSideProps> = async (context) => {
  // TODO: checkAuth()
  const session = await getServerSession(context.req, context.res, authOptions)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }

  if (config.USE_MOCKS) {
    return { props: { hello: mocks.hello } }
  }

  try {
    const res = await fetch(`${config.API_URL}/api/hello`)
    return { props: { hello: await res.json() } }
  } catch (e) {
    // TODO: If not logged in go here
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }

    // TODO: if404(e) {}
    console.log({ e })
    return { notFound: true }
  }
}
