import { render } from '@testing-library/react'
import Home from './page'

const renderHome = () => render(<Home />)

describe('Livros', () => {
  it('should render Books page', () => {
    const { getByTestId, getByText } = renderHome()

    const wrapperPage = getByTestId(/books-page/i)
    expect(wrapperPage).toBeInTheDocument()

    const titleElement = getByText(/seção de livros/i)
    expect(titleElement).toBeInTheDocument()

    const bookList = getByTestId(/book-list/i)
    expect(bookList).toBeInTheDocument()
  })
})
