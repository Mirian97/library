import { InputHTMLAttributes, useId } from 'react'

const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const id = useId()
  return <input id={id} {...props} className={`input ${className}`} />
}

export default Input
