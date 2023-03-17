import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'

import { runMockServer } from './Dashboard.mocks'
import { IDashboardServerSideProps } from './Dashboard.types'

// import { authOptions } from '~/api/auth/[...nextauth]'
import { config } from '~/config'

if (config.USE_MOCKS) {
  runMockServer()
}

export const DashboardPage = observer(({ hello }: IDashboardServerSideProps) => {
  useEffect(() => {
    fetch(`${config.API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => console.log('[DashboardPage] hello fetched on client', data))
  }, [])

  console.log('[DashboardPage] hello fetched on server', hello)

  return (
    <div className="bg-background">
      <h1 className="text-3xl font-bold">Dashboard page</h1>
    </div>
  )
})
