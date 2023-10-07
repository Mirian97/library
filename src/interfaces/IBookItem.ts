interface IEpub {
  isAvailable: boolean
}

interface IPdf {
  isAvailable: boolean
}

interface ISearchInfo {
  textSnippet: string
}

interface ISaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice: {
    amount: number
    currencyCode: string
  }
  retailPrice: {
    amount: number
    currencyCode: string
  }
}

interface IAccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: IEpub
  pdf: IPdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

interface IReadingModes {
  text: boolean
  image: boolean
}

interface IPanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export interface IImageLinks {
  thumbnail: string
}

interface IIndustryIdentifiers {
  type: string
  identifier: string
}

interface IVolumeInfo {
  title: string
  authors?: string[]
  publisher: string
  description: string
  publishedDate: string
  industryIdentifiers: IIndustryIdentifiers[]
  readingModes: IReadingModes
  pageCount: number
  printType: string
  categories: string[]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: IPanelizationSummary
  imageLinks: IImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

interface IBookItem {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: IVolumeInfo
  saleInfo: ISaleInfo
  accessInfo: IAccessInfo
  searchInfo: ISearchInfo
}

export default IBookItem
