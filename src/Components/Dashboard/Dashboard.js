import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props) {
    super(props) 

    }

    render() {
      const list = this.props.inventory.map( (product) => {
        <li>{product.name}</li>
      })
      console.log({list})
      return (
        <div>
          <Product  />
          <ul>{list}</ul>
        </div>
      )
    }
  }



