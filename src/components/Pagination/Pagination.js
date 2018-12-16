import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ hotelCount, page, perPage, handleOnPaginate }) => {
  const totalPages = Math.ceil(hotelCount / perPage)
  let pageLinks = []

  for(let i=page; i<=totalPages && i<page+3; i++) {
    pageLinks.push(
      <li key={i} className={`page-item page-item-${i} ${page === i ? 'active': ''}`}>
        <a className="page-link" href="#" page={i} onClick={handleOnPaginate}>{i}</a>
      </li>
    )
  }

  return (
    <nav>
      <ul className="pagination float-right">
        <li key="prev" className={`page-item prev ${page === 1 ? 'disabled': ''}`}>
          <a className="page-link" href="#" page={page-1} aria-label="Previous" onClick={handleOnPaginate}>
            <span aria-hidden="true" page={page-1} onClick={handleOnPaginate}>&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        { pageLinks }
        <li key="next" className={`page-item next ${page === totalPages ? 'disabled': ''}`}>
          <a className="page-link" href="#" page={page+1} aria-label="Next" onClick={handleOnPaginate}>
            <span aria-hidden="true" page={page+1} onClick={handleOnPaginate}>&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
      <div className="font-italic text-muted">{`Page: ${page} / ${totalPages}`}</div>
    </nav>
  )
}

Pagination.propTypes = {
  handleOnPaginate: PropTypes.func,
  hotelCount: PropTypes.number,
  page: PropTypes.number,
  perPage: PropTypes.number,
}

export default Pagination