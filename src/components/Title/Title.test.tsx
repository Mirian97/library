import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Title from './Title'

const renderTitle = () => render(<Title />)

describe('Title', () => {
  it('should render Title correctly', () => {
    const { getByRole } = renderTitle()
    const headingElement = getByRole('heading')
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveClass('title')
  })
})
