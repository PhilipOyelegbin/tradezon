import React from 'react';
import { productData } from './data';

const Products = () => {
  return (
    <section className="my-5">
      <h2 className="text-2xl text-center font-bold">Our Products</h2>
      <div id='products' className='md:w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto px-5'>
        {productData?.map(obj => {
          return (
            <div className='rounded-md bg-indigo-500 text-slate-200 p-3' key={obj.id}>
              <img className='rounded-t-md w-full h-60' src={obj.image} alt="product-image" />
              <h3 className='text-center text-2xl'>{obj.title}</h3>
              <p className='md:text-sm mb-3'>{obj.description}</p>
              <a className="btn" href={obj.link} target="_blank">Get Now</a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Products
