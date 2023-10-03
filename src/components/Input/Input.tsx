import { InputHTMLAttributes } from 'react'

const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className={`input ${className}`} />
)

export default Input
