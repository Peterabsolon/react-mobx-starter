import React from 'react'
// import { observer } from 'mobx-react-lite'

export interface ILoginPageProps {
  foo?: string
}

export const LoginPage = ({ foo }: ILoginPageProps) => {
  console.log({ foo })
  return <div>LoginPage</div>
}
