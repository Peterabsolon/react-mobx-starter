import React from 'react'
import { observer } from 'mobx-react-lite'

export interface ILoginPageProps {
  foo?: string
}

export const LoginPage = observer(({ foo }: ILoginPageProps) => {
  console.log({ foo })

  return (
    <div>
      <h1 className="text-3xl font-bold">Login page</h1>
    </div>
  )
})
