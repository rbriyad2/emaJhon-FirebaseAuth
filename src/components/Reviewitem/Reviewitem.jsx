import React from "react";
import "./Reviewitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Reviewitem = ({ product, handleRemoveCart}) => {
  const {id, img, name, quantity, price } = product;
  return (
    <div className="reviewProductContent">
      <img src={img} alt="" />
        <div className="productdetails">
          <h4>{name}</h4>
          <h5 className="price">
            Price: <span>${price}</span>
          </h5>
          <h5 className="shippingcarge">
            Quantity : <span>{quantity}</span>
          </h5>
        </div>
      <button onClick={()=>handleRemoveCart(id)} className="deletebtn">
          <FontAwesomeIcon className="deleteicon" icon={faTrashCan} />
        </button>
    </div>
  );
};

export default Reviewitem;
