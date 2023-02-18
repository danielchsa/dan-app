import React from 'react'

import './Detail.css'

export const Details = ({product}) => {

    if(!product) {
        return <h1>Loading...</h1>
    }
    
  return <>
            <h1>Detail</h1>
            <div className="detail">
                <div className="product-info">
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                    <button className="btn">Buy</button>
                </div>
                <div className="product-img">
                <img src={product.image} alt='item' width='300px' height='300px' />
                </div>
            </div> 
        </>
}
