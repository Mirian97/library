export const defaultBookItem = {
  kind: '',
  id: '',
  etag: '',
  selfLink: '',
  volumeInfo: {
    title: '',
    subtitle: '',
    authors: [''],
    publisher: '',
    publishedDate: '',
    description: '',
    industryIdentifiers: [
      {
        type: '',
        identifier: ''
      }
    ],
    readingModes: {
      text: false,
      image: false
    },
    pageCount: 0,
    printType: '',
    categories: [''],
    averageRating: 0,
    ratingsCount: 0,
    maturityRating: '',
    allowAnonLogging: false,
    contentVersion: '',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: '',
      thumbnail: ''
    },
    language: '',
    previewLink: '',
    infoLink: '',
    canonicalVolumeLink: ''
  },
  saleInfo: {
    country: '',
    saleability: '',
    isEbook: false,
    listPrice: {
      amount: 0,
      currencyCode: ''
    }
  },
  accessInfo: {
    country: '',
    viewability: '',
    embeddable: false,
    publicDomain: false,
    textToSpeechPermission: '',
    epub: {
      isAvailable: false
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: '',
    accessViewStatus: '',
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: ''
  }
}

export const defaultBooks = {
  kind: '',
  totalItems: 0,
  items: [defaultBookItem]
}
