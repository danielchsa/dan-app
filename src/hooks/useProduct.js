import { useContext, useEffect, useState } from "react";
import Context from "../context/ProductContex";
import { getAllProducts } from "../services/getAllProducts";
import { getProductsByCategory } from "../services/getProductByCategory";

function useProduct({keyword = null }) {
    const {products, setProducts} = useContext(Context)
   
    useEffect(()=>{
        
        if(!keyword){
            
            getAllProducts().then(setProducts).catch(err => console.log(err))
            return
        }

        getProductsByCategory(keyword).then(setProducts).catch(err => console.log(err))

    }, [])

    return { products, setProducts }
}

export default useProduct;