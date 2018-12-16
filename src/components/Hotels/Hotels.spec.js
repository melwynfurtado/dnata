import React from 'react'
import renderer from 'react-test-renderer'
import Hotels from './Hotels'

describe('Hotels Component', () => {
  const hotels = [{
    "Distance": 3.4872358588140977,
    "EstablishmentId": 2182944,
    "EstablishmentType": "Hotel",
    "Location": "Paris",
    "MinCost": 844,
    "Name": "Aberotel Montparnasse",
    "Stars": 3,
    "UserRating": 8,
    "UserRatingTitle": "Great",
    "UserRatingCount": 1,
    "ImageUrl": "https://i.t-rp.co.uk/ei/2/1/8/2/9/4/4/0_400_400.jpg",
    "ThumbnailUrl": "https://i.t-rp.co.uk/ei/2/1/8/2/9/4/4/0_80_80.jpg"
  }]

  it('renders correctly', () => {
    const tree = renderer
                  .create(<Hotels 
                      hotels={hotels} 
                      hotelCount={1} 
                      handleOnPaginate={()=>{}} 
                      handleOnSort={()=>{}} 
                      page={1} 
                      perPage={20} 
                      sortBy={{key: 'Stars', order: 'desc'}} />)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders "No hotels found. Please try to adjust your query or use one of the existing filters provided above."', () => {
    const tree = renderer
                  .create(<Hotels 
                    hotels={[]} 
                    hotelCount={0} 
                    handleOnPaginate={()=>{}} 
                    handleOnSort={()=>{}} 
                    page={1} 
                    perPage={20} 
                    sortBy={{key: 'Stars', order: 'desc'}} />)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })
})