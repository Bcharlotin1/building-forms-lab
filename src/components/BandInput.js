// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      name:''
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    })
  };

  render() {
    return(
      <div>
        <form  onSubmit={(event)=>this.handleSubmit(event)}>
          <input 
          type="text"
          onChange={this.handleChange}
          value={this.state.name}>
          </input>

          <input type="submit"></input>
        </form>
      </div>
    )
  }
}



export default BandInput;
