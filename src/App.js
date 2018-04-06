import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [
        {
          name: 'shoes',
          price: '12',
          imageUrl: 'shoeImageHere'
        },
        {
          name: 'socks',
          price: '24',
          imageUrl: 'sockImageHere'
        },
        {
          name: 'pants',
          price: '36',
          imageUrl: 'pantImageHere'
        },
        {
          name: 'shirt',
          price: '48',
          imageUrl: 'shirtImageHere'
        }]
    }
  }


  render() {
    return (
      <div>
        <Dashboard list={this.state.inventoryList}/>
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
