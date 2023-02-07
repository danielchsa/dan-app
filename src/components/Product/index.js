import React from "react";
import { Link } from "wouter";
import './Product.css'

export function Product({ id, url, title }) {
  return (
    <div className="product">
      <img alt="hola" src={url} />
      <p>{title}</p>
      <Link to={`/product/${id}`}>
        <button className="btn">See detail</button>
      </Link>
    </div>
  );
}
