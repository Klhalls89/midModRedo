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
    let url = 'http://localhost:3001/api/v1/reservations'
    fetch(url)
    .then(results => results.json())
    .then(data => this.updateState(data))
    .catch(error => console.log(error))
  }

  updateState = (reservations) => {
    this.setState({
      reservations
    })
  }

  makeNewRes = (res) => {
    let newRes = {...res, id:Date.now()}
    let newReservations = [...this.state.reservations, newRes]
    this.setState({
      reservations: newReservations
    })
  }

  postReservations = () => {
    let url = 'http://localhost:3001/api/v1/reservations'
    let data = this.state
    const options = { method: 'POST', 
                      body: JSON.stringify(data), 
                      headers: {'Content-Type': 'application/json'}
  } 
    fetch (url, options)
    .then(results => results.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  render() {
    let { reservations } = this.state
    console.log(reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ResForm makeNewRes={this.makeNewRes} />
        <ResContainer reservations={reservations} />
      </div>
    )
  }
}

export default App;
