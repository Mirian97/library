import { HTMLAttributes } from 'react'

const Title = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={`title ${className}`} {...props} />
)

export default Title
