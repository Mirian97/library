import { render } from '@testing-library/react'
import Title from './Title'

const renderTitle = () =>
  render(
    <Title id='my-title' className='custom-class'>
      Meu título
    </Title>
  )

describe('Title', () => {
  it('should render Title correctly with default class "title"', () => {
    const { getByText } = renderTitle()
    const headingElement = getByText(/meu título/i)

    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveClass('title')
  })

  it('should apply custom className', () => {
    const { getByText } = renderTitle()
    const headingElement = getByText(/meu título/i)

    expect(headingElement).toHaveClass('title')
    expect(headingElement).toHaveClass('custom-class')
  })

  it('should pass other HTML attributes', () => {
    const { getByText } = renderTitle()
    const headingElement = getByText(/meu título/i)

    expect(headingElement).toHaveAttribute('id', 'my-title')
  })
})
