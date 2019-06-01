import React, { Component } from 'react';
import './App.css';
import ResContainer from './ResContainer'
import ResForm from './ResForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    this.getReservations()
  }

  getReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(results => results.json())
    .then(data => console.log(data))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ResForm />
        <ResContainer />
      </div>
    )
  }
}

export default App;
