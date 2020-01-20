import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  // state = {
  //   seconds: 0
  // };
 
  tick() {
    this.props.tickHandler()
  }
 
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
 
  componentWillUnmount() {
    clearInterval(this.interval);
  }
 
  render() {
   return (
      <div>
        <p>{this.props.test}</p>
      </div>
    );
  }
}

 export default Timer;
