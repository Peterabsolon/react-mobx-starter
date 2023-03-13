import React, { InputHTMLAttributes } from 'react'
import { observer } from 'mobx-react-lite'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = observer((props: IInputProps) => {
  return <div>Input</div>
})
