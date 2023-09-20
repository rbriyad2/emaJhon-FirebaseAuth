import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handelClearCart, children}) => {
  //    const cart =props.cart;
  // console.log(cart)
  let totalPrice = 0;
  let shippingTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity ===0){
    //     product.quantity=1;
    // }

    // product.quantity = product.quantity ||1;
    totalPrice = product.price + totalPrice * product.quantity;
    shippingTotal = product.shipping + shippingTotal;
    quantity = quantity + product.quantity;
  }
  const taxtotal = (totalPrice * 7) / 100;
  const subtotal = totalPrice + shippingTotal + taxtotal;

  
  return (
    <div className="cart-summary-in">
      <h3 className="cart-summary-h3">Order Summary</h3>
      <div className="summery">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${shippingTotal}</p>
        <p>Tax: ${taxtotal.toFixed(2)}</p>
        <p>Grand Total: ${subtotal.toFixed(2)}</p>

        <button onClick={handelClearCart} className="clear-cart">
          <span>Clear-cart</span>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        {children}
        
      </div>
    </div>
  );
};

export default Cart;
