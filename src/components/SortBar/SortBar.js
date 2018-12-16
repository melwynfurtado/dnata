import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

const SortBar = ({ handleOnSort, sortBy }) => {
  return (
    <nav className="sortbar navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sortBy">
        Sort by <span className="fa fa-sort"></span>
      </button>
      <div className="collapse navbar-collapse" id="sortBy">
        <div className="navbar-nav">
          <Link clickHandle={handleOnSort} sortBy={sortBy} field="Distance" label="Distance" />
          <Link clickHandle={handleOnSort} sortBy={sortBy} field="Stars" label="Stars" />
          <Link clickHandle={handleOnSort} sortBy={sortBy} field="MinCost" label="Minimum Cost" />
          <Link clickHandle={handleOnSort} sortBy={sortBy} field="UserRating" label="User ratings" />
        </div>
      </div>
    </nav>    
  )
}

SortBar.propTypes = {
  handleOnSort: PropTypes.func,
  sortBy: PropTypes.shape({
    order: PropTypes.string,
  }),
}

export default SortBar
