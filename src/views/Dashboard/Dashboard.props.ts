import { GetServerSideProps } from 'next'

import { mocks } from './Dashboard.mocks'
import { IDashboardServerSideProps } from './Dashboard.types'

import { config } from '~/config'
import { ROUTES } from '~/constants'
import { is404 } from '~/utils'

export const getServerSideProps: GetServerSideProps<IDashboardServerSideProps> = async () => {
  if (config.USE_MOCKS) {
    return { props: { hello: mocks.hello } }
  }

  try {
    const res = await fetch(`${config.API_URL}/api/hello`)
    return { props: { hello: await res.json() } }
  } catch (e) {
    if (is404(e)) {
      return { notFound: true }
    }

    return {
      redirect: {
        destination: ROUTES.ERROR,
        permanent: false,
      },
    }
  }
}
