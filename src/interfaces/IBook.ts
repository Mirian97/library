import IBookItem from './IBookItem'

interface IBook {
  kind: string
  totalItems: number
  items: IBookItem[]
}

export default IBook
