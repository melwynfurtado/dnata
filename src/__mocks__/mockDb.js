import low from 'lowdb'
import runInContext from 'lodash/fp'

import hotels from './hotels.json'

// API Resources
const HOTELS = 'hotels'

// In memory database
const hotelsDb = new low('db.hotels.json')
hotelsDb.setState({
  [HOTELS]: hotels,
})

export { 
  HOTELS,
  hotelsDb
}
