import api from './api'
const apiKey = process.env.NEXT_PUBLIC_BOOKS_API_KEY

export const getBooks = async () => {
  const { data } = await api.get(`/volumes?apiKey=${apiKey}&q=''`)
  return data
}

export const getOneBook = async (bookId: string) => {
  const { data } = await api.get(`/volumes/${bookId}`)
  return data
}
