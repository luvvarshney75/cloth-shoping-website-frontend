import React from 'react'
import { useContext } from 'react';
import { shopContext } from '../context/ShopContext';

import {Link} from 'react-router-dom'

const Card = ({product}) => {
  const {products,currency} = useContext(shopContext);
  return (
    <div className="card ">
      <Link to={`/product/${product._id}`} >
      <div className="overflow-hidden">
        <img src={product.image} className="card-img hover:scale-110 transition ease-in-out" alt={product.name} />
      </div>
      <div className="card-info">
        <h3>{product.name}</h3>
        <p className="text-lg font-bold">${currency}{product.price.toFixed(2)}</p>
      </div>
      </Link>
    </div>
  )
}

export default Card