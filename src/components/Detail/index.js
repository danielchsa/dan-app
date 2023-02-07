import React, { useContext, useEffect } from "react";
import Context from "../../context/ProductContex";

import './Detail.css'


function ProductDetail({params}) {
    const { id } = params
    const { products } = useContext(Context)

    const product = products.find(item => item.id === parseInt(id))
    
    useEffect(()=>{
        if(!product){
            
        }
    },[])
    return (
        <>
        {!product ? <h5>Cargando...</h5>
        :
        <>
            <h1>Detail</h1>
            <div className="detail">
                <div className="product-info">
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                    <span>${product.price}</span>
                    <button className="btn">Comprar</button>
                </div>
                <div className="product-img">
                <img src={product.image} alt='item' width='300px' height='300px' />
                </div>
            </div> 
        </>   
    }
            
        </>
    )
}

export default ProductDetail;