import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Input from './Input'

const renderInput = () =>
  render(<Input placeholder='test placeholder' className='custom-class' type='search' />)

describe('Input', () => {
  it('should render input correctly', () => {
    const { getByPlaceholderText } = renderInput()

    const inputElement = getByPlaceholderText(/Test Placeholder/i)
    expect(inputElement).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { getByPlaceholderText } = renderInput()
    const inputElement = getByPlaceholderText(/Test Placeholder/i)

    expect(inputElement).toHaveClass('input')
    expect(inputElement).toHaveClass('custom-class')
  })

  it('should pass other HTML attributes', () => {
    const { getByPlaceholderText } = renderInput()
    const inputElement = getByPlaceholderText(/Test Placeholder/i)

    expect(inputElement).toHaveAttribute('type', 'search')
  })
})
