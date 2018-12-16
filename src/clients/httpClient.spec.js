import axios from 'axios'
import httpClient from './httpClient'

jest.mock('axios')

describe('httpClient', () => {
  it('should return httpClient object', () => {
    expect(httpClient).toEqual(expect.objectContaining({
      get: expect.any(Function)
    }))
  })

  it('#get should call axios http lib', () => {
    const hotels = {
      results: [{
        id: 123,
        Name: 'Hotel Paris',
      }]
    }
    axios.mockImplementation(() => Promise.resolve(hotels))

    httpClient
      .get()
      .then(response => {
        expect(response).toBe(hotels)
      })
  })
})