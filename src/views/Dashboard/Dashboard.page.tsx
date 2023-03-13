import React from 'react'
// import { observer } from 'mobx-react-lite'

export interface IDashboardPageProps {
  foo?: string
}

export const DashboardPage = ({ foo }: IDashboardPageProps) => {
  console.log({ foo })
  return <div>DashboardPage</div>
}
