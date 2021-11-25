// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name:''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addband(this.state.name);
  };

  render() {
    return(
      <div>
        <form>
          <input 
          type="text"
          onChange={this.handleChange}
          value={this.state.name}>
          </input>
          <input type="submit" onSubmit={this.handleSubmit}> Submit</input>
        </form>
      </div>
    )
  }
}

export default BandInput
