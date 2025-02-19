import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavHeader.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const NavHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category.activeCategory);
  const handleCategoryClick = (category) => {
    dispatch({ type: "SET_ACTIVE_CATEGORY", payload: category });
    dispatch({ type: "FILTER_PRODUCTS", payload: category });
    navigate(`/products/${category.replace(/\s+/g, "-").toLowerCase()}`);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navHeader">
            <li className="nav-item">
              <a className={`nav-link ${activeCategory === "All" ? "active" : ""}`} onClick={() => handleCategoryClick("All")}>All</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeCategory === "Computers" ? "active" : ""}`} onClick={() => handleCategoryClick("Computers")}>Computers</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeCategory === "Tablets" ? "active" : ""}`} onClick={() => handleCategoryClick("Tablets")}>Tablets</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeCategory === "Drones & Cameras" ? "active" : ""}`} onClick={() => handleCategoryClick("Drones & Cameras")}>Drones & Cameras</a>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-link ${activeCategory === "Headphones" || activeCategory === "Speakers" ? "active" : ""}`}id="audioDropdown"role="button">Audio</a>
              <ul className="dropdown-menu" aria-labelledby="audioDropdown">
                <li>
                  <a className={`dropdown-item ${activeCategory === "Headphones" ? "active" : ""}`} onClick={() => handleCategoryClick("Headphones")}> Headphones</a>
                </li>
                <li>
                  <a className={`dropdown-item ${activeCategory === "Speakers" ? "active" : ""}`} onClick={() => handleCategoryClick("Speakers")}>Speakers</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeCategory === "Mobile" ? "active" : ""}`} onClick={() => handleCategoryClick("Mobile")}>Mobile</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeCategory === "T.V & Home Cinema" ? "active" : ""}`} onClick={() => handleCategoryClick("T.V & Home Cinema")}>T.V & Home Cinema</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeCategory === "Wearable Tech" ? "active" : ""}`} onClick={() => handleCategoryClick("Wearable Tech")}>Wearable Tech</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeCategory === "Sale" ? "active" : ""}`} onClick={() => handleCategoryClick("Sale")}>Sale</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};