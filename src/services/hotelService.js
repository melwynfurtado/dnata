function hotelService({ userConfig, client } = { userConfig: {}, client: httpClient }) {
  const defaultConfig = {
    baseUri: "http://localhost:8080",
  }

  const config = {
    ...defaultConfig,
    ...userConfig
  }

  const generatePath = endpoint  => config.baseUri + endpoint

  // Public API
  return {
    searchHotels: (params) => {      
      const options = {
        url: generatePath('/hotels'),
        params
      }

      return client.get(options)
    }
  }
}

export default hotelService