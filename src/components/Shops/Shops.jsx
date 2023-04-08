import React, { useEffect, useState } from "react";
import "./Shops.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {addToDb, getShoppingCart} from '../utilities/fakedb';

const Shops = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // use the localStorage 
  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];
    // console.log(storedCart);
    for(const  id in storedCart){
      // console.log(id);
      const addedProduct = products.find(product => product.id === id)
      
      if (addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]) 
  // set the dependency 

  const handleAddToCart =(product) =>{
    // console.log(product)
    const newCart =[...cart,product]
    setCart(newCart);
    addToDb(product.id);
  }
  

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} 
          product={product} 
          handleAddToCart={handleAddToCart}

          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shops;
