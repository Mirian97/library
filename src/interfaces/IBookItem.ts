interface ISaleInfo {
  saleability: string
  retailPrice: {
    amount: number
    currencyCode: string
  }
}

export interface IImageLinks {
  thumbnail: string
}

interface IVolumeInfo {
  title: string
  authors?: string[]
  publisher: string
  description: string
  publishedDate: string
  imageLinks: IImageLinks
}

interface IBookItem {
  id: string
  volumeInfo: IVolumeInfo
  saleInfo: ISaleInfo
}

export default IBookItem
