import React, { useContext } from "react";
import Context from "../../context/ProductContex";

import useProduct from "../../hooks/useProduct";
import { ProductList } from "../ProductList";

function Results({params}) {
    const {keyword} = params;

    const {products: productList} = useContext(Context)
    const products = productList.filter(item => item.category === decodeURI(keyword))  



    return <>
        <h3>Searching results for "{decodeURI(keyword)}" </h3>
        <ProductList products={products} />
    </>;
}

export default Results;