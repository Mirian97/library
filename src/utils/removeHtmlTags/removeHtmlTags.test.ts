import removeHtmlTags from './removeHtmlTags'

describe('removeHtmlTags', () => {
  it('should remove html tags from a string', () => {
    const textWithHtml = '<h1>Hello World</h1><p> Test paragraph.</p>'
    const expectedResult = 'Hello World Test paragraph.'
    expect(removeHtmlTags(textWithHtml)).toBe(expectedResult)
  })

  it('should return the same string when input is a text without html tags', () => {
    const textWithoutHtml = 'Hello World Test paragraph.'
    expect(removeHtmlTags(textWithoutHtml)).toBe(textWithoutHtml)
  })

  it('should replace &nbsp; with space', () => {
    const textWithHtml = '<h1>Teste&nbsp;com&nbsp;nbsp</h1>'
    const expectedResult = 'Teste com nbsp'

    expect(removeHtmlTags(textWithHtml)).toBe(expectedResult)
  })

  it('should return undefined if text is not provided', () => {
    const emptyText = undefined
    expect(removeHtmlTags(emptyText)).toBeUndefined()
  })
})
