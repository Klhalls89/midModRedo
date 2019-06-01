import React, { Component } from 'react';

class ResForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handelSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }


  changeState = (name,value) => {
    this.setState({
      [name]:value
    })
  }

  render () {
    const {name, date, time, number} = this.state
    return(
      <div>
        <form onSubmit={this.handelSubmit}>
          <input name='name' onChange={this.changeState} value={name} type="text" />
          <input name='date' onChange={this.changeState} value={date} type="text" />
          <input name='time' onChange={this.changeState} value={time} type="text" />
          <input name='number'onChange={this.changeState} value={number} type="text" />
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default ResForm;