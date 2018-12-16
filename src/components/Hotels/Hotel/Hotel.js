import React from 'react'
import PropTypes from 'prop-types'
import Stars from './Stars'
import './Hotel.scss'

const Hotel = ({ hotel }) => (
  <div 
    key={hotel.EstablishmentId} 
    className="hotel card mb-3"
  >
    <div className="card-body">
      <div className="card-text">
        <img 
          className="rounded float-md-left float-sm-left mr-3" 
          src={hotel.ThumbnailUrl} 
          alt={hotel.Name} 
        />
        <div className="float-md-left float-sm-left">
          <h5 className="card-title">{ hotel.Name }</h5>
          <Stars stars={hotel.Stars} />
          <div>
            { hotel.Location }&nbsp;
            (<span className="fa fa-map-marker"></span>&nbsp;
            { Math.round(hotel.Distance * 100)/100 } miles away)
          </div>            
        </div>
        <div className="float-md-right text-md-right float-sm-left text-sm-left">
          <div>{ hotel.UserRatingTitle } - { hotel.UserRating } / 10</div>
          <div className="mb-3 text-muted">{ hotel.UserRatingCount } reviews</div>
          <div className="font-weight-bold font-italic">£{ hotel.MinCost } (per night)</div>
        </div>
      </div>
    </div>
  </div>
)

Hotel.propTypes = {
  hotel: PropTypes.shape({
    EstablishmentId: PropTypes.number.isRequired,
    Name: PropTypes.string,
    Distance: PropTypes.number,
    EstablishmentType: PropTypes.string,
    Location: PropTypes.string,
    MinCost: PropTypes.number,
    Stars: PropTypes.number,
    UserRating: PropTypes.number,
    UserRatingTitle: PropTypes.string,
    UserRatingCount: PropTypes.number,
    ImageUrl: PropTypes.string,
    ThumbnailUrl: PropTypes.string,
  })
}

export default Hotel