import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { ChevronLeftCircle } from 'lucide-react'
import Button, { IButton } from './Button'

describe('Button', () => {
  const onClick = jest.fn()
  const icon = <ChevronLeftCircle data-testid='icon' />

  const renderButton = (props?: IButton) =>
    render(
      <Button onClick={onClick} endIcon={icon} {...props}>
        Meu botão
      </Button>
    )
  it("should render Button correctly with default class and 'contained-button'", () => {
    const { getByText } = renderButton()
    const buttonElement = getByText(/meu botão/i)

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('button')
    expect(buttonElement).toHaveClass('contained-button')
    expect(buttonElement).not.toHaveClass('plain-button')
  })

  it('should apply custom className', () => {
    const { getByText } = renderButton({ className: 'custom-class' })
    const buttonElement = getByText(/meu botão/i)

    expect(buttonElement).toHaveClass('button')
    expect(buttonElement).toHaveClass('custom-class')
  })

  it("should apply class 'plain-button' if variant is 'plain'", () => {
    const { getByText } = renderButton({ variant: 'plain' })
    const buttonElement = getByText(/meu botão/i)

    expect(buttonElement).toHaveClass('plain-button')
    expect(buttonElement).not.toHaveClass('contained-button')
  })

  it('should render endIcon as a children', () => {
    const { getByText, getByTestId } = renderButton()
    const buttonElement = getByText(/meu botão/i)
    const svgElement = getByTestId(/icon/i)

    expect(buttonElement).toBeInTheDocument()
    expect(svgElement).toBeInTheDocument()
  })

  it('should call onClick function when button is clicked', () => {
    const { getByText } = renderButton()
    const buttonElement = getByText(/meu botão/i)

    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
