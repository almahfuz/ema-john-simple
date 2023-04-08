import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // const cart =props.cart;
//   console.log(cart);
  let totalPrice = 0;
  let TotalShipping = 0;
  let quantity = 0;
  for (const product of cart) {

    //product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    TotalShipping = TotalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
//   this is tax section, tax is 7% 
  const tax =totalPrice*7/100;

  const grandTotal = totalPrice + TotalShipping + tax;

  return (
    <div>
      <div className="cart">
        <h4>Order Summary </h4>
        <p>Selected items: {quantity} </p>
        <p>Total Price : ${totalPrice} </p>
        <p>Total Shipping : ${TotalShipping} </p>
        <p>Tax : ${tax.toFixed(2)} </p>
        <h5>Grand Total : ${grandTotal.toFixed(2)} </h5>
      </div>
    </div>
  );
};

export default Cart;
