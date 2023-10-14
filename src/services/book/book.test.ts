import MockAdapter from 'axios-mock-adapter'
import api from '../api/api'
import { apiKey, getBooks, getOneBook } from './book'

describe('Book Requests', () => {
  let mock: MockAdapter
  const mockSucessResponse = { data: 'mock data' }

  beforeEach(() => {
    mock = new MockAdapter(api)
  })
  afterEach(() => {
    mock.restore()
  })
  it('should fetch books', async () => {
    const searchTerm = 'search-term'
    const url = `/volumes?apiKey=${apiKey}&q=${searchTerm}`
    mock.onGet(url).reply(200, mockSucessResponse)

    const result = await getBooks(searchTerm)
    expect(result).toEqual(mockSucessResponse)
  })

  it('should fetch books with "%27%27" if serchTerm is not provided', async () => {
    const ramdomSearch = '%27%27'
    const url = `/volumes?apiKey=${apiKey}&q=${ramdomSearch}`
    mock.onGet(url).reply(200, mockSucessResponse)

    const result = await getBooks()
    expect(result).toEqual(mockSucessResponse)
  })

  it('should fetch one book', async () => {
    const bookId = '123'
    const url = `/volumes/${bookId}`
    mock.onGet(url).reply(200, mockSucessResponse)

    const result = await getOneBook(bookId)
    expect(result).toEqual(mockSucessResponse)
  })
})
