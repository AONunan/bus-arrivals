import React from 'react';
import './Arrival.css';

const arrival = (props) => {
  return (
    <div className="Arrival">
      {/* <p>Bus {props.route} due in {props.time} minutes</p> */}

      <p>Bus {props.route}</p>
      <p>Arriving at {props.time.substring(11,16)}</p>
      <p>{props.duetime === "Due" ? "Due now" : "Due in " + props.duetime + " minutes"}</p>
    </div>
  )
};

export default arrival;
