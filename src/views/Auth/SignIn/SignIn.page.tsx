import { observer } from 'mobx-react-lite'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getServerSession } from 'next-auth'
import { getProviders, signIn } from 'next-auth/react'
import React from 'react'

import { authOptions } from '~/config'
import { ROUTES } from '~/constants'

export const SignInPage = observer(({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Sign in</h1>

      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
          </div>
        ))}
    </div>
  )
})

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // Forward if logged in already
  const session = await getServerSession(context.req, context.res, authOptions)
  if (session) {
    return { redirect: { destination: ROUTES.DASHBOARD } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
