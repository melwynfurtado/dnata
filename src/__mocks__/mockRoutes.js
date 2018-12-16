import * as methods from './mockMethods'
import { HOTELS } from './mockDb'

const routes = new Map([
  [
    'get',
    new Map([
      [HOTELS, methods.getHotels],
    ]),
  ],
  // we can define other http methods like POST, PATCH, PUT or DELETE to be handled 
])

export default routes
