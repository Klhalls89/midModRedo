import React, { Component } from 'react';
import './App.css';
import ResContainer from './ResContainer'
import ResForm from './ResForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    this.getReservations()
  }

  getReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(results => results.json())
    .then(data => this.updateRes(data))
    .catch(error => console.log(error))
  }

  updateRes = (reservations) => {
    this.setState({
      reservations
    })
  }

  render() {
    let { reservations } = this.state
    console.log(reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ResForm />
        <ResContainer reservations={reservations} />
      </div>
    )
  }
}

export default App;
