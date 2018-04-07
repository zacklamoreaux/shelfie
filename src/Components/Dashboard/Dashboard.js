import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props) {
    super(props) 

    }

    render() {
      const list = this.props.inventory.map( (product, id) => {
        return (
          <h3> <Product key={id} product={product}/> </h3>
        )
      })
      return (
        <div>
          <ul>{list}</ul>
        </div>
      )
    }
  }
          



