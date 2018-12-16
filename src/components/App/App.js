import React from 'react'
import debounce from 'lodash/debounce'
import isEmpty from 'lodash/isEmpty'

import hotelService from '../../services/hotelService'
import Branding from '../Branding'
import Search from '../Search'
import Hotels from '../Hotels'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hotelCount: 0,
      query: '',
      page: 1,
      perPage: 20,      
      minCost: '',
      isLoading: false,
      hotels: [],
      sortBy: {
        key: 'Stars',
        order: 'desc',
      },      
      stars: [],
      userRatings: [],
    }
    this.handleOnQueryChange = this.handleOnQueryChange.bind(this)
    this.handleOnMinCostChange = this.handleOnMinCostChange.bind(this)
    this.handleOnPaginate = this.handleOnPaginate.bind(this)
    this.handleOnSearch = this.handleOnSearch.bind(this)
    this.handleOnSort = this.handleOnSort.bind(this)
    this.handleOnStarsChange = this.handleOnStarsChange.bind(this)
    this.handleOnUserRatingChange = this.handleOnUserRatingChange.bind(this)
    this.getResultsDebounced = debounce(this.getResults, 500)
    this.setLoading = this.setLoading.bind(this)
    this.resetLoading = this.resetLoading.bind(this)
  }

  componentDidMount() {
    // Fetch recommendations base on user behavior or 
    // for this task I am just loading default list of hotels 
    this.getResults()    
  }

  buildQuery() {
    const { query, page, perPage, minCost, sortBy, stars, userRatings } = this.state

    return {
      filterBy: {
        Name: query,
        ...!isEmpty(minCost) && { MinCost: minCost },
        ...!isEmpty(stars) && { Stars: stars },
        ...!isEmpty(userRatings) && { UserRating: userRatings },
      },
      page,
      perPage,
      sortBy,
    }
  }

  getResults() {
    const hotelApi = hotelService({ client: this.props.httpClient })
    const params = this.buildQuery()
    this.setLoading()
    
    hotelApi
      .searchHotels(params)
      .then(({ data }) => {
        this.setState({ hotelCount: data.count, hotels: data.list })
        this.resetLoading()
      })
      .catch(error => {
        this.resetLoading()
        this.setState({ hotelCount: 0, hotels: [] }, 
          () => { console.error(error) }
        )
      })
  }

  handleOnQueryChange(e) {
    this.setState(
      { query: e.target.value, page: 1 }, 
      () => this.getResultsDebounced())
  }

  handleOnMinCostChange(e) {
    this.setState(
      { minCost: e.target.value, page: 1 },
      () => this.getResultsDebounced())
  }

  handleOnPaginate(e) {
    e.preventDefault()
    const page = e.target.getAttribute('page')

    this.setState({ 
      page: parseInt(page),
    }, () => this.getResultsDebounced())  
  }

  handleOnSearch(e) {
    e.preventDefault()
    this.getResultsDebounced()
  }

  handleOnSort(e) {
    e.preventDefault()
    const field = e.target.getAttribute('field')
    const order = e.target.getAttribute('order')

    this.setState({ 
      sortBy: {
        key: field,
        order: order === 'desc' ? 'asc' : 'desc',
      },
    }, () => this.getResultsDebounced())
  }

  handleOnStarsChange(e) {
    const { target: { value, checked } } = e
    const { stars } = this.state
    const newStars = checked ? 
      [...stars, value] : 
      [...stars.filter(star => star !== value)]
    this.setState({
      stars: newStars, 
      page: 1,
    },
    () => this.getResultsDebounced())    
  }

  handleOnUserRatingChange(e) {
    const { target: { value, checked } } = e
    const { userRatings } = this.state
    const newUserRatings = checked ? 
      [...userRatings, value] : 
      [...userRatings.filter(userRating => userRating !== value)]
    this.setState({
      userRatings: newUserRatings, 
      page: 1,
    },
    () => this.getResultsDebounced())    
  }

  resetLoading() {
    this.setState({ isLoading: false })
  }

  setLoading() {
    this.setState({ isLoading: true })
  }

  render() {
    const { 
      hotelCount, 
      hotels, 
      query, 
      page, 
      perPage, 
      minCost, 
      isLoading, 
      sortBy,
    } = this.state

    return (
      <div className="hotels-listing">
        <Branding />
        <Search 
          {...{ query, minCost }}
          handleOnQueryChange={this.handleOnQueryChange}
          handleOnMinCostChange={this.handleOnMinCostChange}
          handleOnSearch={this.handleOnSearch}
          handleOnStarsChange={this.handleOnStarsChange}
          handleOnUserRatingChange={this.handleOnUserRatingChange}
        />
        { 
          isLoading ? 
            <div className="loader"></div>
          :
            <Hotels 
              { ...{ hotelCount, hotels, page, perPage, sortBy } }
              handleOnPaginate={this.handleOnPaginate}
              handleOnSort={this.handleOnSort} 
            /> 
        }
      </div>
    )
  }
}

export default App