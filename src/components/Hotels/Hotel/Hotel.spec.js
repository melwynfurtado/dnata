import React from 'react'
import renderer from 'react-test-renderer'
import Hotel from './Hotel'

describe('Hotel Component', () => {
  let Component

  const hotel = {
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
  }

  beforeEach(() => {
    Component = <Hotel hotel={hotel} />
  })

  it('renders correctly', () => {
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })
})