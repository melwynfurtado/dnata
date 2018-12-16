import React from 'react'
import PropTypes from 'prop-types'

const Stars = ({ stars }) => {
  let starsJsx = []

  for(let i=0; i <5; i++) {
    starsJsx.push(<span key={i} className={`fa fa-star ${stars > i && 'checked'}`}></span>)
  }

  return <div className="stars">{ starsJsx }</div>  
}

Stars.propTypes = {
  stars: PropTypes.number,
}

export default Stars