import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart}  from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { name, ratings, img, price, seller}= props.product;
    const handleaddToCart= props.handleaddToCart;

    return (
        <div className='all-prpduct'>
            <img src={img} alt="product img" />
            <div className="product-info">
                <h6 className='productName'>{name}</h6>
                <p className='price'>Price ${price}</p>
                <p className='manufacturer'>Manufacturer : {seller}</p>
                <p className='rating'>Rating {ratings} stars</p>
            </div>
            <button onClick={()=>handleaddToCart(props.product)} className='adtoCartbtn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;