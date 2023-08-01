import { HTMLAttributes } from 'react'

const Title = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return <h1 className={`title ${className}`} {...props} />
}

export default Title
