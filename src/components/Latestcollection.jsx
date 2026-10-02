import React from 'react'
import { useContext } from 'react';
import { shopContext } from '../context/ShopContext';
import Title from './Title';
import Card from './Card';
const Latestcollection = () => {

const {products ,currency} = useContext(shopContext);
console.log(products);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={`LATEST`} text2={`COLLECTIONS`} />

        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our latest arrivals and exclusive collections
        </p>
      </div>
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.slice(0, 10).map((item, index) => (
        <Card key={item._id} product={item} />
      ))}
    </div>



    </div>
  )
} 

export default Latestcollection