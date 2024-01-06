import formatBRLMoney from './formatBRLMoney'

describe('formatBRLMoney', () => {
  it('should format a number into BRL money format', () => {
    const value1 = 50
    const value2 = 53.7
    const value3 = 5500.45
    // TODO: verificar o pq de não conseguir validar a igualdade deste jeito toBe('R$ 50,00')
    expect(formatBRLMoney(value1)).toMatch(new RegExp('50,00'))
    expect(formatBRLMoney(value2)).toMatch(new RegExp('53,70'))
    expect(formatBRLMoney(value3)).toMatch(new RegExp('5.500,45'))
  })

  it('should return undefined if input is undefined', () => {
    const emptyValue = ''
    const nullValue = null
    const undefinedValue = undefined

    expect(formatBRLMoney(emptyValue)).toBeUndefined()
    expect(formatBRLMoney(nullValue)).toBeUndefined()
    expect(formatBRLMoney(undefinedValue)).toBeUndefined()
  })
})
