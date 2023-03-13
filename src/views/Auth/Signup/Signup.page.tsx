import React from 'react'
import { observer } from 'mobx-react-lite'

export interface ISignupPageProps {
  foo?: string
}

export const SignupPage = observer(({ foo }: ISignupPageProps) => {
  console.log({ foo })

  return (
    <div>
      <h1 className="text-3xl font-bold">Signup page</h1>
    </div>
  )
})
