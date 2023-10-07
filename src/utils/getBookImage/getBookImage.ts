import { IImageLinks } from '@/interfaces/IBookItem'

export const getBookImage = (imageLinks?: IImageLinks) =>
  imageLinks?.thumbnail ? imageLinks.thumbnail : '/image/book-without-cover.jpg'
