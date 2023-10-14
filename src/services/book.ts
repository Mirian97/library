import api from './api/api'
const apiKey = process.env.NEXT_PUBLIC_BOOKS_API_KEY

export const getBooks = async (searchTerm?: string) => {
  searchTerm = searchTerm || '%27%27'
  const { data } = await api.get(`/volumes?apiKey=${apiKey}&q=${searchTerm}`)
  return data
}

export const getOneBook = async (bookId: string) => {
  const { data } = await api.get(`/volumes/${bookId}`)
  return data
}
