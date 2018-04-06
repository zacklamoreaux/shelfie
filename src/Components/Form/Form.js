import React, { Component } from 'react';

export default class Form extends Component {
  constructor( ) {
    super() 

    this.state = {
      name: '',
      price: '',
      imageUrl: ''
    }
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.resetInput = this.resetInput.bind(this)
  }

  handleNameChange(e) {
    // console.log(e)
    this.setState({
      name: e.target.value
    })
  }

  handlePriceChange(e) {
    // console.log(e)
    this.setState({
      price: e.target.value
    })
  }

  handleImageChange(e) {
    // console.log(e)
    this.setState({
      imageUrl: e.target.value
    })
  }

  resetInput() {
    this.setState({
      name: '',
      price: '',
      imageUrl: ''
    })
  }


  render() {
    return (
      <div className='form'>
        <p>Image URL:</p>
        <input type='text' value={this.state.imageUrl} onChange={this.handleImageChange} />
        <p>Product Name:</p>
        <input type='text' value={this.state.name} onChange={this.handleNameChange} />
        <p>Price:</p>
        <input type='text' value={this.state.price} onChange={this.handlePriceChange}/>
        <button onClick={() => this.resetInput()} >Cancel</button>
        <button>Add to Inventory</button>
      </div>
    )
  }
}