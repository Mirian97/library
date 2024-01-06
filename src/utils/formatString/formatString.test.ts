import formatString from './formatString'

describe('formatString', () => {
  const string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  it('should slice string if it is longer than maxLength', () => {
    expect(formatString(string, 11)).toBe('Lorem ipsum...')
    expect(formatString(string, 20)).toBe('Lorem ipsum dolor si...')
  })

  it('should return the same string when maxLength is longer than string', () => {
    expect(formatString(string, 90)).toBe(string)
    expect(formatString(string, 150)).toBe(string)
  })

  it('should return the same string if maxLength is not provided', () => {
    expect(formatString(string)).toBe(string)
  })

  it('should return undefined if text is undefined', () => {
    const undefinedText = undefined
    expect(formatString(undefinedText)).toBeUndefined()
  })

  it('should return an empty string when called with an empty string', () => {
    const emptyString = ''
    expect(formatString(emptyString)).toBe(emptyString)
  })
})
