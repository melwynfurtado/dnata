import React from 'react'

const Checkbox = ({ id, value, handleChange, children }) => (
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id={id} value={value} onChange={handleChange}/>
    <label className="form-check-label" htmlFor={id}>{ children }</label>
  </div>  
)

export default Checkbox