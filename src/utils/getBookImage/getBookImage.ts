import { IImageLinks } from '@/interfaces/IBookItem'

const getBookImage = (imageLinks?: IImageLinks) =>
  imageLinks?.thumbnail ? imageLinks.thumbnail : '/image/book-without-cover.jpg'

export default getBookImage
