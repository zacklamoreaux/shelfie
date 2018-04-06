import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(  ) {
    super() 

    }

    render() {
      let list = this.props.list.map(product => {
        <li>{product}</li>
      })
      return (
        <div>
        <Product />
        {this.props.list}
        </div>
      )
    }
  }


