import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import BookItem from './BookItem'

const volumeInfo = {
  title: 'Test title',
  authors: ['Author 1', 'Author 2'],
  imageLinks: {
    thumbnail: 'https://book-image.com.br'
  },
  publisher: 'Test publisher',
  publishedDate: '08/10/2023',
  description: 'Test description'
}

const renderBookItem = () => render(<BookItem id='123' volumeInfo={volumeInfo} />)

describe('BookItem', () => {
  it('should render link container from BookItem correctly', () => {
    const { getByRole, getByText } = renderBookItem()
    const linkContainer = getByRole('link')

    expect(linkContainer).toBeInTheDocument()
    expect(linkContainer).toHaveClass('book-item')
    expect(linkContainer).toHaveAttribute('href', 'livros/123')
    expect(getByText(/veja mais/i)).toBeInTheDocument()
  })

  it('should render book title if is provided', () => {
    const { getByText } = renderBookItem()
    const bookTitle = getByText(/Test title/i)
    expect(bookTitle).toBeInTheDocument()
  })

  it('should render book authors if are provided', () => {
    const { getByText } = renderBookItem()
    const bookAuthors = getByText(/Author 1, Author 2/i)
    expect(bookAuthors).toBeInTheDocument()
  })
})
