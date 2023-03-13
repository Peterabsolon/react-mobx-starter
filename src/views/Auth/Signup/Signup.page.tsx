import React from 'react'
// import { observer } from 'mobx-react-lite'

export interface ISignupPageProps {
  foo?: string
}

export const SignupPage = ({ foo }: ISignupPageProps) => {
  console.log({ foo })
  return <div>SignupPage</div>
}
