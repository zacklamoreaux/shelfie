import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props) {
    super(props) 

    }

    render() {
      const list = this.props.inventory.map( (product, index) => {
        return (
          <h3 key={index}> {product.name} {product.price} {product.imageUrl} </h3>
        )
      })
      return (
        <div>
          <Product />
          <ul>{list}</ul>
        </div>
      )
    }
  }



