import { render } from '@testing-library/react'
import RootLayout from './layout'

jest.mock('next/font/google', () => ({
  ...jest.requireActual('next/font/google'),
  MuseoModerno: jest.fn
}))

const renderRootLayout = () => render(<RootLayout>My custom text</RootLayout>)

describe('RootLayout', () => {
  it('render RootLayout', () => {
    const { getByTestId, getByText, getByRole } = renderRootLayout()

    const wrapper = getByTestId(/root-layout/i)
    expect(wrapper).toBeInTheDocument()

    const headerElement = getByRole('banner')
    expect(headerElement).toBeInTheDocument()

    const childElement = getByText(/My custom text/i)
    expect(childElement).toBeInTheDocument()
  })
})
