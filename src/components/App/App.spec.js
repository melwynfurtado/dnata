import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'
import Search from '../Search'
import Hotels from '../Hotels'
import hotelService from '../../services/hotelService'
import Branding from '../Branding'

jest.mock('../../services/hotelService', () => {
  return jest.fn().mockImplementation(() => {
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

    return { searchHotels: () => Promise.resolve({ data: {list: hotels, count: 1} }) }
  })
})

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('renders Branding component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Branding).length).toEqual(1)
  })

  it('renders loader on query change', () => {
    const wrapper = shallow(<App />)
    const event = { target: { value: 'Paris' } }
    wrapper.instance().handleOnQueryChange(event)
    expect(wrapper.find('div.loader').length).toEqual(1)
  })

  it('renders <Search /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Search).length).toEqual(1)
  })
  
  it('renders <Hotels /> component', done => {
    const wrapper = shallow(<App />)
    setTimeout(() => {
      expect(wrapper.find(Hotels).length).toEqual(1)
      done()
    }, 50)
  })

  it('#handleOnQueryChange calls hotelService after setting query into component state', done => {
    const wrapper = shallow(<App />)
    const event = { target: { value: 'Paris' } }
    wrapper.instance().handleOnQueryChange(event)
    expect(wrapper.state('query')).toEqual('Paris')
    setTimeout(() => {
      expect(hotelService).toHaveBeenCalled()
      done()
    }, 50)
  }) 
  
  it('#setLoading should set loading state', done => {
    const wrapper = shallow(<App />)
    setTimeout(() => {
      wrapper.instance().setLoading()
      expect(wrapper.state('isLoading')).toEqual(true)
      done()
    }, 50)
  })

  it('#resetLoading should reset loading state', done => {
    const wrapper = shallow(<App />)
    setTimeout(() => {
      wrapper.instance().resetLoading()
      expect(wrapper.state('isLoading')).toEqual(false)
      done()
    }, 50)
  }) 
  
  it('#buildQuery should return query object', () => {
    const wrapper = shallow(<App />)
    const minCost = "300"
    const query = "Paris"
    const expected = {
      filterBy: {
        Name: query,
        MinCost: minCost,
      },
      page: 1,
      perPage: 20,
      sortBy: {
        key: 'Stars',
        order: 'desc',
      },      
    }
    wrapper.setState({ minCost, query })
    const actual = wrapper.instance().buildQuery()
    expect(actual).toEqual(expected)
  })  
  
  it('#getResults should set results into component state', done => {
    const wrapper = shallow(<App />)
    const expected = [{
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
    wrapper.instance().getResults()
    setTimeout(() => {
      expect(wrapper.state('hotels')).toEqual(expected)
      expect(wrapper.state('hotelCount')).toEqual(1)
      done()
    }, 50)
  })
  
  it('#handleOnMinCostChange calls hotelService after setting min cost into component state', done => {
    const wrapper = shallow(<App />)
    const event = { target: { value: '300' } }
    wrapper.instance().handleOnMinCostChange(event)
    expect(wrapper.state('minCost')).toEqual('300')
    setTimeout(() => {
      expect(hotelService).toHaveBeenCalled()
      done()
    }, 50)
  })   

  it('#handleOnPaginate calls hotelService after setting page into component state', done => {
    const wrapper = shallow(<App />)
    const event = { preventDefault: ()=> {}, target: { getAttribute: () => '3' } }
    wrapper.instance().handleOnPaginate(event)
    expect(wrapper.state('page')).toEqual(3)
    setTimeout(() => {
      expect(hotelService).toHaveBeenCalled()
      done()
    }, 50)
  })     

  it('#handleOnSearch calls hotelService', done => {
    const wrapper = shallow(<App />)
    const event = { preventDefault: ()=> {} }
    wrapper.instance().handleOnSearch(event)
    setTimeout(() => {
      expect(hotelService).toHaveBeenCalled()
      done()
    }, 50)
  })
  
  it('#handleOnSort calls hotelService after setting sort by into component state', done => {
    const wrapper = shallow(<App />)
    const event = { preventDefault: ()=> {}, target: { getAttribute: () => 'Stars' } }
    wrapper.instance().handleOnSort(event)
    expect(wrapper.state('sortBy')).toEqual({"key": "Stars", "order": "desc"})
    setTimeout(() => {
      expect(hotelService).toHaveBeenCalled()
      done()
    }, 50)
  })  
  
  it('#handleOnStarsChange calls hotelService after setting stars into component state', done => {
    const wrapper = shallow(<App />)
    const event = { target: { value: 3, checked: true } }
    wrapper.instance().handleOnStarsChange(event)
    expect(wrapper.state('stars')).toEqual([3])
    setTimeout(() => {
      expect(hotelService).toHaveBeenCalled()
      done()
    }, 50)
  }) 
  
  it('#handleOnUserRatingChange calls hotelService after setting user ratings into component state', done => {
    const wrapper = shallow(<App />)
    const event = { target: { value: 9, checked: true } }
    wrapper.instance().handleOnUserRatingChange(event)
    expect(wrapper.state('userRatings')).toEqual([9])
    setTimeout(() => {
      expect(hotelService).toHaveBeenCalled()
      done()
    }, 50)
  })     
})