import React from 'react'
// import { observer } from 'mobx-react-lite'

export interface IDashboardPageProps {
  foo?: string
}

export const DashboardPage = ({ foo }: IDashboardPageProps) => {
  console.log({ foo })

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard page</h1>
    </div>
  )
}
