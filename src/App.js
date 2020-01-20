import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Arrival from './Arrival/Arrival';
import Header from './Header/Header';
import Timer from './Timer/Timer';

class App extends Component {
  state = {
    totalSeconds: 30,
    secondsRemaining: 30,
    busStop: 1426,
    arrivals: []
  };

  getApiData = () => {
    console.log("Calling API");
  
    axios.get('https://1mg5ylcec1.execute-api.eu-west-1.amazonaws.com/prod').then(response => {
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({
        arrivals: response.data.body
      });
    });
  }

  appTick = () => {
    
    if (this.state.secondsRemaining === 0) {

      this.setState(state => ({
        secondsRemaining: state.totalSeconds
      }));

      this.getApiData();

    } else {

      this.setState(state => ({
        secondsRemaining: state.secondsRemaining - 1
      }));
    }
  }
  
  componentDidMount() {
    this.getApiData()
  }

  render() {
    const arrivals = (
      <div>
        {this.state.arrivals.map(arrival => {

          return <Arrival
            key={arrival.id}
            route={arrival.route}
            time={arrival.arrivaldatetime}
            duetime={arrival.duetime}
          />

        })}
        
        {/* <p>Placeholder</p> */}


      </div>
    );

    return (
      <div className="App">
        <Header busStop={this.state.busStop} />

        <p>Auto updating in {this.state.secondsRemaining} seconds</p>

        <Timer tickHandler={this.appTick} />

        {arrivals}
      </div>
    );
  }
}

export default App;
