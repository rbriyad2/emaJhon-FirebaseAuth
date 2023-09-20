import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Review.css";
import { Link, useLoaderData } from "react-router-dom";
import Reviewitem from "../Reviewitem/Reviewitem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";


const Review = () => {
    const savedCart = useLoaderData()
    const [cart, setCart]= useState(savedCart)
    const handleRemoveCart =(id)=>{
      const remaining = cart.filter(product => product.id !== id);
      setCart(remaining)
      removeFromDb(id)
    }
    const handelClearCart = ()=>{
      setCart([])
      deleteShoppingCart()
    }
  return (
    <div className="order">
      <div className="container">
        <div className="shop-content">
          <div className="review-product">
            {
              cart.map(product => <Reviewitem 
              key={product.id}
              product ={product}
              handleRemoveCart={handleRemoveCart}
              ></Reviewitem>)
            }
          </div>
          <div className="cart">
            <Cart
            handelClearCart={handelClearCart}
            cart={cart}>
              <Link className="Procedlink" to="/checkout">
                <button className="review-order">
                  <span>Proceed Checkout</span>
                  <FontAwesomeIcon icon={faCreditCard} />
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
