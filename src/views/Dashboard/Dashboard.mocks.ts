import { createServer } from 'miragejs'

import { IApi } from '~/api'
import { config } from '~/config'

export const mocks = {
  hello: { name: 'Dude' } as Awaited<ReturnType<IApi['hello']>>,
}

export const runMockServer = () =>
  createServer({
    routes() {
      this.get(`${config.API_URL}/api/hello`, () => JSON.stringify(mocks.hello))
      this.passthrough()
    },
  })
