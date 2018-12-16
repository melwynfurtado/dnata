import routes from './mockRoutes'

const mockedHttpClient = {}

routes.forEach((methodRoutes, method) => {
  mockedHttpClient[method] = ({ url, params }) =>
    new Promise((resolve, reject) => {
      const resourcePath = url.replace(/http\:\/\/localhost\:8080\//i, '')

      try {
        const methodRouteData = methodRoutes.get(resourcePath)
        const responseData = methodRouteData({ resourcePath, params })
        __DEV__ &&
        console.log(`MOCKS for ${method} -> ${resourcePath}`, responseData)
        console.log('params: ', params)

        // Simulate delay in server response
        setTimeout(() => resolve({ data: responseData }), 1000)
      } catch (e) {
        __DEV__ &&
        console.log(`MOCKS for ${method} -> ${resourcePath} not found`)
        console.log('params: ', params)
        console.log(e)
        reject(e)
      }
    })
})

export default mockedHttpClient
