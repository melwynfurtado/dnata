import React from 'react'
import PropTypes from 'prop-types'
import Hotel from './Hotel'
import './Hotels.scss'
import SortBar from '../SortBar'
import Pagination from '../Pagination/Pagination'

const Hotels =({ hotelCount, hotels, handleOnPaginate, handleOnSort, page, perPage, sortBy }) => {
  let hotelJsx

  if (hotelCount === 0) {
    hotelJsx = [
      <p key="no-hotels" className="lead">
        No hotels found. Please try to adjust your query or use one of the existing filters provided above.
      </p>
    ]
  } else {
    hotelJsx = [
      <SortBar key="SortBar" handleOnSort={handleOnSort} sortBy={sortBy} />,
      hotels.map(hotel => <Hotel key={hotel.EstablishmentId} hotel={hotel} />),
      <Pagination key="Pagination" { ...{ hotelCount, page, perPage, handleOnPaginate } } />
    ]
  }

  return <div className="hotels">{ hotelJsx }</div>
}

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      EstablishmentId: PropTypes.number.isRequired,
    })
  ),
}

export default Hotels