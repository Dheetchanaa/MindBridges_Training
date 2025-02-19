import React from "react";
import { useSelector } from "react-redux";
import "./productDetails.css";
import { HeartOutlined } from "@ant-design/icons";

export const ProductDetails = () => {
  const { selectedProduct } = useSelector((state) => state.productDetails);
  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={selectedProduct.image} alt={selectedProduct.name} />
      </div>
      <div className="product-info">
        <h2>{selectedProduct.name}</h2>
        <p className="price">${selectedProduct.price}</p>
        <p>{selectedProduct.description}</p>
        <div className="button-group">
          <div className="addWish">
          <button className="add-to-cart">Add to Cart</button>
          <button className="wishlist">
            <HeartOutlined className="heart-icon" />
          </button>
          </div>
          <br></br>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};