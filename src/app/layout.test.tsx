import { render } from '@testing-library/react'
import RootLayout from './layout'

const renderRootLayout = () => render(<RootLayout>My custom text</RootLayout>)

describe('RootLayout', () => {
  it('render RootLayout', () => {
    const { getByTestId, getByText, getByRole } = renderRootLayout()

    const wrapper = getByTestId(/root-layout/i)
    expect(wrapper).toBeInTheDocument()

    const mainEleement = getByRole('main')
    expect(mainEleement).toBeInTheDocument()

    const childElement = getByText(/My custom text/i)
    expect(childElement).toBeInTheDocument()
  })
})
