import React, { Component } from 'react';

class ResForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handelSubmit = (e) => {
    e.preventDefault()
    this.props.makeNewRes(this.state)
    this.setState({ 
      name: '',
      date: '',
      time: '',
      number: 0})
  }


  changeState = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]:value
    })
  }

  render () {
    const {name, date, time, number} = this.state
    return(
      <div>
        <form onSubmit={this.handelSubmit}>
          <input 
            type="text" 
            name='name' 
            value={name} 
            placeholder="Name"
            onChange={this.changeState} 
          />
          <input 
            type="text" 
            name='date' 
            value={date} 
            placeholder="Date"
            onChange={this.changeState} 
          />
           <input 
            type="text" 
            name='time' 
            value={time} 
            placeholder="Time"
            onChange={this.changeState} 
          />
           <input 
            type="text" 
            name='number' 
            value={number} 
            placeholder="Number of peeople"
            onChange={this.changeState} 
          />
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default ResForm;