import React from 'react'
import { observer } from 'mobx-react-lite'

import { Link } from '~/components'
import { ROUTES } from '~/constants'

export interface ISignupPageProps {
  foo?: string
}

export const SignupPage = observer(({ foo }: ISignupPageProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Signup page</h1>

      <Link href={ROUTES.LOGIN}>Login</Link>
    </div>
  )
})
