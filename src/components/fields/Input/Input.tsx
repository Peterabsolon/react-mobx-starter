import { observer } from 'mobx-react-lite'
import React, { InputHTMLAttributes } from 'react'

export type IInputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = observer((props: IInputProps) => {
  console.log({ props })

  return <div>Input</div>
})
