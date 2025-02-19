import React, { useDebugValue, useEffect, useRef, useState } from 'react'
import HomeBackground from "../pages/Images/HomeBackground.avif"
import HomeBackgroundDivLeft from "../pages/Images/HomeBackgroundDivLeft.avif";
import HomeBackgroundDivRight from "../pages/Images/HomeBackgroundDivRight.avif";
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import {TruckFilled , CodeSandboxOutlined, DollarOutlined, UpCircleFilled} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from './Footer';
export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredProducts, filterOnSaleProducts } = useSelector((state) => state.products);
useEffect(() => {
  dispatch({ type: "FILTER_PRODUCTS", payload: "Best Sellers" });
  dispatch({ type: "On_Sale" });
}, [dispatch]);
  const handleCategoryClick = (category) => {
    dispatch({ type: "SET_ACTIVE_CATEGORY", payload: category });
    dispatch({ type: "FILTER_PRODUCTS", payload: category });
    navigate(`/products/${category.replace(/\s+/g, "-").toLowerCase()}`);
  };
  const [user, setUserInput] = useState({
    email: '',
    checkbox: false,
  });
  const handleCheckboxChange = (event) => {
    setUserInput((prev) => ({ ...prev, checkbox: event.target.checked }));
  };  
  const emailPattern = /^[a-zA-Z]+[\w_\.\-]+[@][a-z]+[\.]+[a-z]/
  const [error, setUserError] = useState({
    emailError: '',
    checkboxError:''
  });
  const addNewsletter = (e) => {
    setUserInput((pre) => ({
        ...pre, [e.target.name]: e.target.value,
    }));
}
const validation = () => {
    let valid = true;
    if (!emailPattern.test(user.email)) {
        valid = false;
        setUserError((pre) => ({ ...pre, emailError: "! Enter an email address like example@mysite.com." }))
    }
    if(!user.checkbox){
      console.log(user.checkbox)
      valid = false;
      setUserError((pre) => ({ ...pre, checkboxError: "! Check the box to continue."}))
    }
    return valid;
}
const handleNewsletter= () => {
  if (validation()) {
    setUserInput({ email: '', checkbox: false });
    setUserError({ emailError: '', checkboxError: '' });
  }
};
const handleProductClick = (product) => {
  dispatch({ type: "SET_SELECTED_PRODUCT", payload: product });
  const productPath = `/productsDetails/${product.name.replace(/\s+/g, "-").toLowerCase()}`;
  navigate(productPath);
};
const [currentIndex, setCurrentIndex] = useState(0);
const itemsPerPage = 4;
const prevSlide = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};
const nextSlide = () => {
  if (currentIndex < filteredProducts.length - itemsPerPage) {
    setCurrentIndex(currentIndex + 1);
  }
};
const itemWidth = 25;
  return (
    <div className='Home-main-container'>
      <div className='HomeFrontBackground' style={{backgroundImage: `url(${HomeBackground})`}}>
      <p className='p'>Best Prices</p>
      <h1>Incredible Prices on All Your Favorite Items</h1>
      <p>Get more for less on selected brands</p>
      <button type="button"  onClick={() => handleCategoryClick("All")}>Shop Now</button>
      </div>
      <div className='Home-div-container'>
      <div className='Home-div-left-background' style={{backgroundImage: `url(${HomeBackgroundDivLeft})`}}>
      <p className='p'>Holiday Deals</p>
      <h1>Up to 30% off</h1>
      <p>Selected Smartphone Brands</p>
      <button type="button" onClick={() => handleCategoryClick("Mobile")}>Shop</button>
        </div>
        <div className='Home-div-right-background' style={{backgroundImage: `url(${HomeBackgroundDivRight})`}}>
        <p className='p'>Just In</p>
      <h1>Take Your Sound Anywhere</h1>
      <p>Top Headphone Brands</p>
      <button type="button" onClick={() => handleCategoryClick("Headphones")}>Shop</button>
        </div>
      </div>
      <div className="four-box">
      <section>
        <TruckFilled className="icon" />
        <span>Curb-side pickup</span>
      </section>
      <section>
        <CodeSandboxOutlined className="icon" />
        <span>Free shipping on orders over $50</span>
      </section>
      <section>
        <DollarOutlined className="icon" />
        <span>Low prices guaranteed</span>
      </section>
      <section>
        <UpCircleFilled className="icon" />
        <span>Available to you 24/7</span>
      </section>
    </div>
    <div className='slider-main-container'>
      <h2>Best Sellers</h2>
    <div className="slider-container">
      <button className="prev-btn" onClick={prevSlide} disabled={currentIndex === 0}>&#8249;</button>
      <div className="slider-wrapper">
        <div className="slider-content"style={{transform:`translateX(-${currentIndex * itemWidth}%)`}}>
          {filteredProducts.map((product, index) => (
            <div key={index} className="card-item" onClick={() => handleProductClick(product)}>
              <div className="image-container-slider">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="next-btn"onClick={nextSlide}disabled={currentIndex >= filteredProducts.length - itemsPerPage}>&#8250;</button>
    </div>
    <button className='viewAllBtn' onClick={() => handleCategoryClick("All")}>View All</button>
    </div>
      <div className='shop-by-category'>
      <div className="shop-by-container">
      <h3>Shop by Category</h3>
              <div className="shop-by-list">
                <div className="shop-by-inner">
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("Computers")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>Computers</h4>
                      </div>
                    </div>
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("Mobile")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>Mobile</h4>
                      </div>
                    </div>
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("Tablets")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png/v1/fill/w_358,h_358,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>Tablets</h4>
                      </div>
                    </div>
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("T.V & Home Cinema")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>T.V & Home Cinema</h4>
                      </div>
                    </div>
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("Wearable Tech")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c837a6_71e3b067871a4b6a88c3b93a55ba2b00~mv2.jpg/v1/fill/w_212,h_212,q_90/c837a6_71e3b067871a4b6a88c3b93a55ba2b00~mv2.jpg"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>Wearable Tech</h4>
                      </div>
                    </div>
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("Drones & Cameras")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.jpg/v1/fill/w_212,h_212,q_90/c837a6_acb2a2d93555449693ae233b93cb3feb~mv2.jpg"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>Drones & Cameras</h4>
                      </div>
                    </div>
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("Speakers")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c837a6_e0521967c9bb422abb3a3913f64d1eb5~mv2.jpg/v1/fill/w_213,h_212,q_90/c837a6_e0521967c9bb422abb3a3913f64d1eb5~mv2.jpg"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>Speakers</h4>
                      </div>
                    </div>
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("Headphones")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c837a6_48fba84e8b3c48b48e1b5b493a515a3b~mv2.jpg/v1/fill/w_212,h_212,q_90/c837a6_48fba84e8b3c48b48e1b5b493a515a3b~mv2.jpg"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>Headphones</h4>
                      </div>
                    </div>
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("T.V & Home Cinema")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_358,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>T.V & Home Cinema</h4>
                      </div>
                    </div>
                    <div className="shop-by-product-card" onClick={() => handleCategoryClick("Tablets")}>
                      <div className="shop-by-image-container">
                        <img src="https://static.wixstatic.com/media/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png/v1/fill/w_358,h_358,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png"/>
                      </div>
                      <div className="shop-by-product-details">
                        <h4>Tablets</h4>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className='best-price'>
                <img src='https://static.wixstatic.com/media/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png/v1/fill/w_1778,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png'/>
                <div className='best-price-right'>
                  <h4>Save up to <h2>$150</h2> on selected laptop & tablets brands</h4>
                  <p>Terms and conditions apply</p>
                  <button type='button' onClick={()=>{handleCategoryClick("Computers")}}>Shop</button>
                </div>
            </div>
            <div className='slider-main-container'>
      <h2>On Sale</h2>
    <div className="slider-container">
      <button className="prev-btn" onClick={prevSlide} disabled={currentIndex === 0}>&#8249;</button>
      <div className="slider-wrapper">
        <div className="slider-content"style={{transform:`translateX(-${currentIndex * itemWidth}%)`}}>
          {filterOnSaleProducts.map((product, index) => (
            <div key={index} className="card-item" onClick={() => handleProductClick(product)}>
              <div className="image-container-slider">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="next-btn"onClick={nextSlide}disabled={currentIndex >= filteredProducts.length - itemsPerPage}>&#8250;</button>
    </div>
    <button className='viewAllBtn' onClick={() => handleCategoryClick("Sale")}>View All</button>
    </div>
            <div className='todays-special'>
                <div className='todays-special-left'>
                  <h5>Today's Special</h5>
                  <h4>Best Arial View in Town <h2><span>30%</span> OFF</h2> on professional camera drones</h4>
                  <p>Limited quantities.</p>
                  <p>See product detail pages for availability.</p>
                  <button type='button' onClick={()=>{handleCategoryClick("Drones & Cameras")}}>Shop</button>
                </div>
                <img src='https://static.wixstatic.com/media/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png/v1/fill/w_1778,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png'/>
            </div>
            <div className='brands-container'>
              <h3>Brands</h3>
              <div>
              <img src="https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_244,h_138,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png"></img>
              <img src="https://static.wixstatic.com/media/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png/v1/fill/w_244,h_138,q_90/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png"></img>
              <img src="https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_244,h_138,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png"></img>
              <img src="https://static.wixstatic.com/media/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png/v1/fill/w_244,h_138,q_90/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png"></img>
              <img src="https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_244,h_138,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png"></img>
              </div>
            </div>
            <div className='newletter-container'>
              <h3>Newsletter</h3>
              <p>Sign up to receive updates on new arrivals and special offers</p>
              <label className='email-field'><div>Email*</div><div className='email-subscribe'><input type='email' name='email' value={user.email} onChange={addNewsletter}></input><button type='button' onClick={handleNewsletter}>Subscribe</button></div><p className='error'>{error.emailError}</p></label>
              <div className='checkbox-field'><input type='checkbox' checked={user.checkbox} onChange={handleCheckboxChange}></input>Yes, subscribe me to your newsletter. <p className='error'>{error.checkboxError}</p></div>
            </div>
      </div>
      <Footer/>
    </div>
  )
}