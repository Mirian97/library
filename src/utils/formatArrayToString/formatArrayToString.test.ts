import formatArrayToString from './formatArrayToString'

describe('formatArrayToString', () => {
  const array = ['banana', 'maça', 'mexerica', 'melão']
  const arrayWithJoin = 'banana, maça, mexerica, melão'
  it('should return string from array', () => {
    expect(formatArrayToString(array)).toBe(arrayWithJoin)
  })

  it('should return the same string if array length is less than maxLength', () => {
    expect(formatArrayToString(array, 40)).toBe(arrayWithJoin)
  })

  it('should slice string, if array length is greater than maxLength', () => {
    expect(formatArrayToString(array, 20)).toBe('banana, maça, mexeri...')
  })

  it('should return array with join if maxLength is negative', () => {
    expect(formatArrayToString(array, -20)).toBe(arrayWithJoin)
  })
})
