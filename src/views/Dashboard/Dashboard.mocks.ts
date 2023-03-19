import { createServer } from 'miragejs'

import { IApi } from '~/api'
import { config } from '~/config'

export const mocks = {
  hello: { name: 'Dude' } as Awaited<ReturnType<IApi['hello']>>,
}

export const runMockServer = () => {
  createServer({
    urlPrefix: config.API_URL,

    routes() {
      this.get('/api/hello', () => JSON.stringify(mocks.hello))
      this.passthrough()
    },
  })
}
