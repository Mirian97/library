import MockAdapter from 'axios-mock-adapter'
import api from './api'

describe('Axios Instance Configuration', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(api)
  })

  afterEach(() => {
    mock.restore()
  })
  it('should configured correctly', () => {
    expect(api.defaults.baseURL).toBe('https://www.googleapis.com/books/v1')
    expect(api.defaults.timeout).toBe(10000)
    expect(api.defaults.headers['Content-Type']).toBe('application/json')
  })

  it('should make successfull get request', async () => {
    const data = {
      test: 'test'
    }
    mock.onGet('/some-endpoint').reply(200, data)
    const response = await api.get('/some-endpoint')

    expect(response.status).toBe(200)
    expect(response.data).toEqual(data)
  })
})
