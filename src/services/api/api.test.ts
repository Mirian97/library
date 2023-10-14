import api from './api'

describe('Axios Instance Configuration', () => {
  it('should have baseURL configured correctly', () => {
    expect(api.defaults.baseURL).toBe('https://www.googleapis.com/books/v1')
  })

  it('should have timeout configured correctly', () => {
    expect(api.defaults.timeout).toBe(10000)
  })

  it('should have headers with Content-Type configured as application/json', () => {
    expect(api.defaults.headers['Content-Type']).toBe('application/json')
  })
})
