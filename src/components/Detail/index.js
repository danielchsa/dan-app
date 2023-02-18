import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/ProductContex";
import { getSingleProduct } from "../../services/getSingleProduct";

import { Details } from "./details";


function ProductDetail({params}) {
    window.scrollTo(0,0)
    const { id } = params
    const { products } = useContext(Context)
    const [localProduct, setLocalProduct] = useState()

    const product = products.find(item => item.id === parseInt(id))

    useEffect(()=>{
        if(!product){
            getSingleProduct(id).then(setLocalProduct).catch(err => console.log(err))
            
        }
    },[])

    return (
        <>
        {!product ? 
            (
                <Details product={localProduct} /> 
            )
            :
            (
                <Details product={product} />
            )
        }
        </>
    )
}

export default ProductDetail;