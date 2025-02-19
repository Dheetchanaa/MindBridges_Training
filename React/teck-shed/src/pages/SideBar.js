import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./SideBar.css";

export const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeCategory = useSelector((state) => state.category.activeCategory);
  const handleCategoryClick = (category) => {
    dispatch({ type: "SET_ACTIVE_CATEGORY", payload: category });
    dispatch({ type: "FILTER_PRODUCTS", payload: category });
    navigate(`/products/${category.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <div className='sidebarMain'>
      <h4>Browse by</h4>
      <hr/>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid sidebarContainer">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav sideBarNav">
              {["All", "Best Sellers", "Computers", "Drones & Cameras", "Headphones", "Home Page Best Sellers", "Home Page Sale", "Mobile", "Sale", "Speakers", "Tablets", "TV & Home Cinema", "Wearable Tech"].map((category) => (
                <li key={category} className="nav-item">
                  <a className={`nav-link ${activeCategory == category ? "active" : ""}`} onClick={() => handleCategoryClick(category)}>{category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};