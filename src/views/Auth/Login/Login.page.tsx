import { observer } from 'mobx-react-lite'
import React from 'react'

import { Link } from '~/components'
import { ROUTES } from '~/constants'

export interface ILoginPageProps {
  foo?: string
}

export const LoginPage = observer(({ foo }: ILoginPageProps) => {
  console.log({ foo })

  return (
    <div>
      <h1 className="text-3xl font-bold">Login page</h1>

      <Link href={ROUTES.SIGNUP}>Signup</Link>
    </div>
  )
})
