import hotelService from './hotelService'

describe('hotelService', () => {
  let httpClientMockGet
  let httpClientMock

  beforeEach(() => {
    httpClientMockGet = jest.fn()
    httpClientMock = {
      get: httpClientMockGet
    }
  })

  it('should return hotelService object', () => {
    expect(hotelService({ client: httpClientMock })).toEqual(expect.objectContaining({
      searchHotels: expect.any(Function)
    }))
  })

  it('#searchHotels should call get method on httpClient', () => {
    const query = 'paris'
    const baseUri = "https://api.fake.org"
    
    const expectedOptions = {
      url: 'https://api.fake.org/hotels',
      params: {
        query,
      }
    }    

    const hs = hotelService({ 
      userConfig: { 
        baseUri,
      },
      client: httpClientMock,
    })
    hs.searchHotels({ query })
    
    expect(httpClientMockGet).toBeCalledWith(expectedOptions)
  })
})