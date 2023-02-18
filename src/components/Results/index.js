import React, { useContext, useEffect } from "react";
import Context from "../../context/ProductContex";

import { getProductsByCategory } from "../../services/getProductByCategory";
import { ProductList } from "../ProductList";

function Results({params}) {
    const {keyword} = params;

    const {products: productList, setProducts} = useContext(Context)
    const products = productList.filter(item => item.category === decodeURI(keyword))

    useEffect(() => {
      if(products.length < 1){
        getProductsByCategory(keyword).then(setProducts).catch(err => console.log(err))
      }

    }, [keyword])
    


    return  <>
                <h3>Searching results for "{decodeURI(keyword)}" </h3>
                <ProductList products={products} />
            </>;
}

export default Results;