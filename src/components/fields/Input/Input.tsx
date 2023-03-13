import React, { InputHTMLAttributes } from 'react'
import { observer } from 'mobx-react-lite'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  foo?: string
}

export const Input = observer(({ foo }: IInputProps) => {
  console.log({ foo })

  return <div>Input</div>
})
