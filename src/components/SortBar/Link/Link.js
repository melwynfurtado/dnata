import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ clickHandle, sortBy, field, label }) => (
  <a className={`nav-item nav-link ${sortBy.key === field ? 'active' : ''}`} href="#" onClick={clickHandle} field={field} order={`${sortBy.order}`}>
    { label }
    { sortBy.key === field && <span className={`ml-1 align-text-top fa fa-sort-${sortBy.order}`} field={field} order={`${sortBy.order}`}></span> }
  </a>  
)

Link.propTypes = {
  clickHandle: PropTypes.func,
  sortBy: PropTypes.shape({
    key: PropTypes.string,
    order: PropTypes.string,
  }),
  field: PropTypes.string,
  label: PropTypes.string,
}

export default Link
