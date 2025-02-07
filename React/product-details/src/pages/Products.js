import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import './Products.css'
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const { productId, cart, setCart, cartCount, setCartCount, price, setPrice, user } = useContext(UserContext);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(response => response.json())
      .then(data => {
        setProduct(data.find(item => item.id == productId));
      });
    setIsAdded(cart.includes(product.id))
  }, [cart, product.id])
  const addToCart = (e, id, price1) => {
    if (!cart.includes(id)) {
      alert("Product added to cart!");
      setCart(prevCart => {
        const updatedCart = [...prevCart, id];
        return updatedCart;
      });
      setCartCount(prevCount => prevCount + 1);
      setPrice((Number(price) + Number(price1)).toFixed(2));
      setIsAdded(true);
    }
  };
  const moveToCart = () => {
    navigate('/cart');
  }
  const gotoProducts = () => {
    navigate('/allProducts')
  }
  return (
    <section className='allContainer'>
      <header>
        <div className='cart-header'>
          <div className='cart-header-name'>{user.username && <h2>Hello,{user.username}</h2>}</div>
          <div className='cartIcon'><p>{cartCount}</p><i class="fa-solid fa-cart-shopping" onClick={moveToCart}></i>cart</div>
        </div>
        <h2 className="centerText">Explore a World of Products<br />Everything You Need, Delivered to Your Doorstep!</h2>
        <a className='btn btn-warning' onClick={gotoProducts}>Back to products</a>
      </header>
      <section className="mainContainer1">
        <div className="image-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="content-container">
          <h4>{product.title}</h4>
          <h5>₹{product.price}</h5>4.5&nbsp;<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
          <hr />
          <div className="offers-container">
            <p><span>Save Extra </span>with 3 offers</p><hr />
            <p><span>Cashback:</span> Get 5% for Prime members. 3% back for others. Not applicable on EMI orders and Business transactions.</p><hr />
            <p><span>Partner Offers (2):</span> Buy 3 get 3% off, Buy 4 get 4% off, Buy 5 get 5% off View products See AllPartner Offers (2): Buy 3 get 3% off, Buy 4 get 4% off, Buy 5 get 5% off</p>
          </div><br />
          <div className="content-container-footer">
            <div className="content-container-footer1">
              <i className="fa-solid fa-van-shuttle"></i>
              <a>Free Delivery</a>
            </div>
            <div className="content-container-footer1">
              <i className="fa-solid fa-recycle"></i>
              <a>7 days Replacement</a>
            </div>
            <div className="content-container-footer1">
              <i className="fa-solid fa-sack-dollar"></i>
              <a>Cash/Pay on Delivery</a>
            </div>
            <div className="content-container-footer1">
              <i className="fa-solid fa-lock"></i>
              <a>Secure Transaction</a>
            </div>
          </div><br />
          <p>{product.description}</p>
        </div>
        <div className="side-container">
          <h4>In stock</h4>
          <div className="payment-container">
            <div>
              <p>Payment</p>
              <p>Ships from</p>
              <p>Sold by</p>
            </div>
            <div>
              <p>Secure transaction</p>
              <p>Amazon</p>
              <p>Cocoblu Retail</p>
            </div>
          </div>
          <footer>
            <button type="button" className="btn btn-warning" disabled={isAdded} onClick={(e) => { addToCart(e, product.id, product.price) }}>{isAdded ? "Added to cart" : "Add to cart"}</button>
            <button type="button" className="btn btn-danger">Buy Now</button>
          </footer>
        </div>
      </section>
    </section>
  )
}
export default Products