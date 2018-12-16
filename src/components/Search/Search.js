import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from './Checkbox'

const Search = ({ 
  query, 
  handleOnQueryChange, 
  handleOnSearch, 
  handleOnStarsChange, 
  handleOnMinCostChange, 
  handleOnUserRatingChange, 
  minCost 
}) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h2>Hotels</h2>
        <p className="lead">Search best hotel deals available.</p>
        <form onSubmit={handleOnSearch}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="sr-only" htmlFor="hotelName">Hotel Name</label>
              <input 
                type="text" 
                className="form-control mb-2 mr-sm-2" 
                id="hotelName" 
                placeholder="Search by hotel name" 
                value={query} 
                onChange={handleOnQueryChange} 
              />
            </div>
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-primary mb-2">Search</button>
            </div>
          </div>
          <a className="advance-search" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Advanced Search
          </a>       

          <div className="form-row collapse" id="collapseExample">              
            <div className="form-group col-md-3 mr-2">
              <label className="text-muted">Stars:</label>
              <Checkbox id="5star" value="5" handleChange={handleOnStarsChange}>5 stars</Checkbox>
              <Checkbox id="4star" value="4" handleChange={handleOnStarsChange}>4 stars</Checkbox>
              <Checkbox id="3star" value="3" handleChange={handleOnStarsChange}>3 stars</Checkbox>
              <Checkbox id="2star" value="2" handleChange={handleOnStarsChange}>2 stars</Checkbox>
              <Checkbox id="1star" value="1" handleChange={handleOnStarsChange}>1 stars</Checkbox>
              <Checkbox id="unrated" value="0" handleChange={handleOnStarsChange}>Unrated</Checkbox>
            </div>

            <div className="form-group col-md-3 mr-2">
              <label className="text-muted">User Rating:</label>
              <Checkbox id="spectacular" value="10" handleChange={handleOnUserRatingChange}>
                Spectacular <small><strong>(10)</strong></small>
              </Checkbox>
              <Checkbox id="exceptional" value="9" handleChange={handleOnUserRatingChange}>
                Exceptional <small><strong>(9+)</strong></small>
              </Checkbox>
              <Checkbox id="excellent" value="8" handleChange={handleOnUserRatingChange}>
                Excellent <small><strong>(8+)</strong></small>
              </Checkbox>
              <Checkbox id="2star" value="7" handleChange={handleOnUserRatingChange}>
                Good <small><strong>(7+)</strong></small>
              </Checkbox>
              <Checkbox id="1star" value="6" handleChange={handleOnUserRatingChange}>
                Above Average <small><strong>(6+)</strong></small>
              </Checkbox>
              <Checkbox id="unrated" value="0" handleChange={handleOnUserRatingChange}>
                Unrated
              </Checkbox>                                        
            </div>

            <div className="form-group col-md-3 mr-2">
              <label className="text-muted" htmlFor="minCost">Maximum cost (per night):</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">£</span>
                </div>
                <input 
                  type="number" 
                  id="minCost" 
                  name="minCost" 
                  className="form-control" 
                  placeholder="0" 
                  aria-label="Amount (to the nearest pound)" 
                  value={minCost} 
                  onChange={handleOnMinCostChange} 
                />
              </div>             
            </div>                 
          </div>         
        </form>        
      </div>
    </div>    
  )
}

Search.propTypes = {
  query: PropTypes.string,
  handleOnQueryChange: PropTypes.func,
  handleOnMinCostChange: PropTypes.func,
  handleOnSearch: PropTypes.func,
  handleOnStarsChange: PropTypes.func,
  handleOnUserRatingChange: PropTypes.func,  
  minCost: PropTypes.string,
}

export default Search