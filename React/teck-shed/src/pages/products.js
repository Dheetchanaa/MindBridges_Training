import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./products.css";
import { SideBar } from "./SideBar";
export const Products = () => {
  const { filteredProducts, selectedCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: "All" });
  }, [dispatch]);
  const handleProductClick = (product) => {
    dispatch({ type: "SET_SELECTED_PRODUCT", payload: product });
    const productPath = `/productsDetails/${product.name.replace(/\s+/g, "-").toLowerCase()}`;
    navigate(productPath);
  };
  return (
    <div className="products-container">
      <SideBar />
      <div className="products-list">
        <h2>{selectedCategory === "All" ? "All Products" : selectedCategory}</h2>
        {filteredProducts.length} Products
        <br /><br />
        <div className="product-inner">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
              <div className="image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};