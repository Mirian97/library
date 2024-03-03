import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
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

const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: () => ({
    push: mockPush
  })
}))

const renderBookItem = () => render(<BookItem id='123' volumeInfo={volumeInfo} />)

describe('BookItem', () => {
  it('should render wrapper container from BookItem correctly', () => {
    const { getByTestId, getByText } = renderBookItem()
    const wrapperContainer = getByTestId(/book-item/i)

    expect(wrapperContainer).toBeInTheDocument()
    expect(wrapperContainer).toHaveClass('book-item')
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

  it('calls router push when clicked in container', () => {
    const { getByTestId } = renderBookItem()
    const bookItem = getByTestId(/book-item/i)

    fireEvent.click(bookItem)
    expect(mockPush).toHaveBeenCalled()
    expect(mockPush).toHaveBeenCalledWith('livros/123')
  })
})
