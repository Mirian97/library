import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Button from './Button'

const renderButton = () => render(<Button className='custom-class'>Meu botão</Button>)

describe('Button', () => {
  it('should render Button correctly with default class', () => {
    const { getByText } = renderButton()
    const buttonElement = getByText(/meu botão/i)

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('button')
  })

  it('should apply custom className', () => {
    const { getByText } = renderButton()
    const buttonElement = getByText(/meu botão/i)

    expect(buttonElement).toHaveClass('button')
    expect(buttonElement).toHaveClass('custom-class')
  })

  // TODO: fazer rerender para tratar das custom classes de acordo com a variante
  it('should apply class "contained-button" if variant is conatined"', () => {})
})
