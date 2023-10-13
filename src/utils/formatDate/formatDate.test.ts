import formatDate from './formatDate'

describe('formatDate', () => {
  it('should return pt-br date if a input is provided', () => {
    const date1 = '05/15/2023'
    const date2 = '01/01/2023'
    const date3 = '12/31/2023'

    expect(formatDate(date1)).toBe('15/05/2023')
    expect(formatDate(date2)).toBe('01/01/2023')
    expect(formatDate(date3)).toBe('31/12/2023')
  })

  it('should return "Invalid Date" when called with an invalid date string', () => {
    const invalidDate = '2023-20-10'
    expect(formatDate(invalidDate)).toEqual('Invalid Date')
  })

  it('should return undefined if a date is not provided, null or undefined', () => {
    const emptyDate = ''
    const nullDate = null
    const undefinedDate = undefined

    expect(formatDate(emptyDate)).toBeUndefined()
    expect(formatDate(nullDate)).toBeUndefined()
    expect(formatDate(undefinedDate)).toBeUndefined()
  })
})
