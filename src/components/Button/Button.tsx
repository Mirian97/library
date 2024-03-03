import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  endIcon?: React.ReactNode
  variant?: 'contained' | 'plain'
}

const buttonClasses = {
  contained: 'contained-button',
  plain: 'plain-button'
}

const Button = ({
  className,
  endIcon,
  children,
  variant = 'contained',
  ...props
}: IButton) => {
  return (
    <button {...props} className={`button ${buttonClasses[variant]} ${className}`}>
      {children}
      {endIcon}
    </button>
  )
}

export default Button
