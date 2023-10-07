import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DetailItem from './DetailItem'

const renderDetailItem = () => render(<DetailItem name='Editora' description='Época' />)

describe('DetailItem', () => {
  it('should render DetailItem correctly', () => {
    const { getByText, getByTestId } = renderDetailItem()

    const wrapDetailItem = getByTestId(/wrapDetailItem/i)
    const nameItem = getByText(/editora/i)
    const descriptionItem = getByText(/época/i)

    expect(wrapDetailItem).toBeInTheDocument()
    expect(wrapDetailItem).toHaveClass('text-justify')
    expect(nameItem).toBeInTheDocument()
    expect(descriptionItem).toBeInTheDocument()
  })

  it('should have class "hidden" in wrap DetailItem if description is not provided', () => {
    const { getByTestId } = render(<DetailItem name='Preço' />)
    const wrapDetailItem = getByTestId(/wrapDetailItem/i)

    expect(wrapDetailItem).toHaveClass('text-justify hidden')
  })

  it("shouldn't have class 'hidden' in wrap DetailItem if description is not provided", () => {
    const { getByTestId } = renderDetailItem()
    const wrapDetailItem = getByTestId(/wrapDetailItem/i)

    expect(wrapDetailItem).not.toHaveClass('hidden')
  })

  it('should render only name when description is not provided', () => {
    const { queryByText, getByText } = render(<DetailItem name='Item Name' />)

    expect(getByText('Item Name:')).toBeInTheDocument()
    expect(queryByText('Item Description')).not.toBeInTheDocument()
  })
})
