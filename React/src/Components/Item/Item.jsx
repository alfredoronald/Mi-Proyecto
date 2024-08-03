import React from 'react'
import './Item.css'
import {Button} from '../Button/Button'

const Item = (props) => {
  return (
  <div className="item">
    <img src={props.image} alt="" />
    <p>{props.name}</p>
    <div className="item-price">
        <div className="item-price-now">
        {props.price}
        </div>
        <Button>Añadir compra</Button>
    </div>
  </div>
  )
}


export default Item;