import { 
  HOTELS,
  hotelsDb
} from './mockDb'

// Getters for Mock data
const filterPredicate = (filterBy) => {
  return hotel => {
    let foundCount = 0
    for(const key in filterBy) {
      const filterByValue = filterBy[key]
      const hotelField = hotel[key]
      switch(key) {
        case "Name":
          if (hotelField.toLowerCase().includes(filterByValue.trim().toLowerCase())) { 
            foundCount += 1
          }
          break
        case "Stars":
          if(filterByValue.includes(Number(hotelField).toString())) {
            foundCount += 1
          }
          break
        case "UserRating":
          if(filterByValue.includes(Math.floor(hotelField).toString())) {
            foundCount += 1
          }
          break
        case "MinCost":
          if(hotelField <= filterByValue) {
            foundCount += 1
          }
          break                    
        default:
          foundCount = foundCount              
      }
    }
    return foundCount === Object.keys(filterBy).length 
  }
}

const getHotels = ({ resourcePath, params }) => {
  const { 
    filterBy, 
    page,
    perPage,    
    sortBy
  } = params

  const offset = (page - 1) * perPage

  const data = hotelsDb
    .get(HOTELS)
    .get('Establishments')
    .filter(filterPredicate(filterBy))
    .orderBy(sortBy.key, sortBy.order)
    .value()  

  return {
    list: data.slice(offset, offset + perPage),
    count: data.length,
  }
}

export { getHotels }