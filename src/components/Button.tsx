import { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  endIcon?: React.ReactNode
  variant?: 'contained' | 'plain'
}

const Button = ({
  className,
  endIcon,
  children,
  variant = 'contained',
  ...props
}: IButton) => {
  const buttonClasses = {
    contained: 'contained-button',
    plain: 'plain-button'
  }
  return (
    <button {...props} className={`button ${buttonClasses[variant]} ${className}`}>
      {children}
      {endIcon}
    </button>
  )
}

export default Button
