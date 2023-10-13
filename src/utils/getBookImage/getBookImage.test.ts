import getBookImage from './getBookImage'

describe('getBookImage', () => {
  it('should return the thumbnail URL when imageLinks is provided', () => {
    const imageLink = {
      thumbnail: 'https://example.com/book-thumbnail.jpg'
    }
    const result = getBookImage(imageLink)

    expect(result).toBe('https://example.com/book-thumbnail.jpg')
  })

  it('should return the default image URL when imageLinks is undefined', () => {
    const imageLink = undefined
    const result = getBookImage(imageLink)

    expect(result).toBe('/image/book-without-cover.jpg')
  })

  it('should return the default image URL when thumbnail is not provided in imageLinks', () => {
    const imageLink = {
      thumbnail: ''
    }
    const result = getBookImage(imageLink)

    expect(result).toBe('/image/book-without-cover.jpg')
  })
})
