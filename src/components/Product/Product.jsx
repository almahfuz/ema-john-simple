import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, ratings, quantity, price } = props.product;
  return (
    <div className="product-items">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p> price: ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} starts</p>
      </div>
      <button className="btn-cart">Add to Cart</button>

    </div>
  );
};

export default Product;
