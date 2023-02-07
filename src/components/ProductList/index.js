import React, { useEffect, useState } from "react";
import './ProductList.css'

import { Product } from "../Product";
import { getAllProducts } from "../../services/getAllProducts";
import useProduct from "../../hooks/useProduct";

export function ProductList({products}) {
  

  return (
    <div className="Prod-list">
      {products &&
        products.map((item) => (
          <Product id={item.id} url={item.image} title={item.title} key={item.id}/>
        ))}
    </div>
  );
}
