import React from 'react'
import PropTypes from 'prop-types'
import Hotel from './Hotel'
import Pagination from '../Pagination'

const Hotels =({ hotelCount, hotels, handleOnPaginate, page, perPage }) => {
  let hotelJsx

  if (hotelCount === 0) {
    hotelJsx = [
      <p key="no-hotels" className="lead m-3">
        No hotels found. Please try to adjust your query or use one of the existing filters provided above.
      </p>
    ]
  } else {
    hotelJsx = [
      hotels.map(hotel => <Hotel key={hotel.EstablishmentId} hotel={hotel} />),
      <Pagination key="Pagination" { ...{ hotelCount, page, perPage, handleOnPaginate } } />
    ]
  }

  return <div className="hotels">{ hotelJsx }</div>
}

Hotels.propTypes = {
  hotelCount: PropTypes.number,
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      EstablishmentId: PropTypes.number.isRequired,
    })
  ),
  handleOnPaginate: PropTypes.func,
  page: PropTypes.number,
  perPage: PropTypes.number,
}

export default Hotels