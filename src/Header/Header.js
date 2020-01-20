import React from 'react';
// import './Header.css';

const header = (props) => {
  return (
    <div className="Header">
      
      <h1>Arrivals</h1>
      <p>Bus stop: {props.busStop}</p>
    </div>
  )
};

export default header;
