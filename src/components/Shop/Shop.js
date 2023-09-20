import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //step 1: get id of the added product
    for (const id in storedCart) {
      //step 2: get the product from products  byusing id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step3: added quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step 4: add the addded product to the saved cart
        savedCart.push(addedProduct);
      }
      // step 5:set  the cart
    }
    setCart(savedCart);
  }, [products]);

  const handleaddToCart = (product) => {
    let newcart = [];
    //if produt dosen't exists in the cart, then set quantity =1
    // if exits update quantity by 1
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newcart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newcart = [...remaining, exists];
    }
    setCart(newcart);
    addToDb(product.id);
  };

  const handelClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="shop-content">
          <div className="product">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleaddToCart={handleaddToCart}
              ></Product>
            ))}
          </div>
          <div>
            <Cart handelClearCart={handelClearCart} cart={cart}>
              <Link className="revieworderlink" to="/order">
                <button className="review-order">
                  <span>Review Order</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
