import React, { Component } from 'react'

export default function Product(props) {
  let { name, price, imageUrl, id } = props.product 
  return (
    <div>
      <h3 key={id}> {name} {price} {imageUrl} </h3>
    </div>
  )
}