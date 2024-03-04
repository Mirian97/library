import * as bookService from '@/services/book/book'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import DetailBook from './page'

const mockBack = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    back: mockBack
  })
}))

const props = {
  params: { id: '1' }
}

const getOneBookSpy = jest.spyOn(bookService, 'getOneBook')

const renderDetailBook = () => render(<DetailBook {...props} />)

describe('DetailBook', () => {
  const mockBook = {
    id: '1',
    volumeInfo: {
      title: 'Test title',
      publishedDate: '2023-10-08',
      publisher: 'Test publisher',
      description: 'Test description',
      authors: ['Author 1', 'Author 2'],
      imageLinks: {
        thumbnail: 'https://book-image.com.br'
      }
    },
    saleInfo: {
      saleability: 'FOR_SALE',
      retailPrice: { amount: 20 }
    }
  }

  it('render DetailBook succesfully', () => {
    const { getByTestId } = renderDetailBook()
    const wrapper = getByTestId(/detail-book/i)

    expect(wrapper).toBeInTheDocument()
  })

  it('should render book details correctly', async () => {
    const { findByText, findByRole } = renderDetailBook()
    getOneBookSpy.mockResolvedValue(mockBook)
    await waitFor(() => expect(getOneBookSpy).toHaveBeenCalledWith('1'))

    act(async () => {
      expect(await findByRole('img')).toHaveAttribute('src', 'https://book-image.com.br')
      expect(await findByText(/Test title/i)).toBeInTheDocument()
      expect(await findByText(/Test description/i)).toBeInTheDocument()
      expect(await findByText(/Author 1, Author 2/i)).toBeInTheDocument()
      expect(await findByText(/Test publisher/i)).toBeInTheDocument()
      expect(await findByText(/Sim/i)).toBeInTheDocument()
      expect(await findByText(/R\$ 20,00/i)).toBeInTheDocument()
    })
  })

  it.skip('should render loading if isLaodingBook is equal to true', () => {})

  it('should back one page when back button is clicked', async () => {
    const { findByTestId, findByRole } = renderDetailBook()
    const wrapper = await findByTestId(/detail-book/i)
    const backButtonElement = await findByRole('button')

    expect(wrapper).toBeInTheDocument()
    expect(backButtonElement).toBeInTheDocument()

    fireEvent.click(backButtonElement)

    expect(mockBack).toHaveBeenCalled()
    expect(mockBack).toHaveBeenCalledTimes(1)
  })
})
