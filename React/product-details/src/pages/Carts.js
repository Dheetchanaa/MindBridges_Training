import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate = useNavigate();
  const {cart,setCart,cartCount,setCartCount,price,setPrice,user} = useContext(UserContext);
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(response=>response.json())
    .then(data=>{
      setProducts(data.filter(item=>cart.includes(item.id)))
    })
  },[cart])
  const deleteCart = (e,id,price1) => { 
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item !== id); 
      setCart(updatedCart);
      setPrice((Number(price)-Number(price1)).toFixed(2));
      setCartCount(cartCount-1);
    });
  };
  const gotoProducts = ()=>{
    navigate('/allProducts')
  }
  return (
    <div className='cart-container'>
      <header>
            {user.username && <h2>Hello,{user.username}</h2>}
            <h2 className="centerText">Explore a World of Products<br />Everything You Need, Delivered to Your Doorstep!</h2>
            <button type='button' className='btn btn-warning' onClick={gotoProducts}>Back to products</button>
        </header>
      <div className='head-containers'>
      <h3>Shopping Cart</h3>
      <div className='side-container1'><h5>Subtotal({cartCount}{cartCount==1?" item":" items"}): ₹{price}</h5>
      <button type='button' className='btn btn-primary'>Proceed to buy</button></div>
      </div>
    <div className='cart-containers'>
    {products.map((product,index)=>(
        <div className="cart" key={index}>
          <img src={product.image} className="cart-img-top" alt={product.title}/>
          <div className="cart-body" style={{width:"500rem"}}>
            <div className='titleHeader'>
            <h6 className="cart-text">{product.title}</h6>
            <h6><span className="price">₹{product.price}</span></h6></div><br></br>
            <p>{product.description}</p>
            <button type='button' className='btn btn-danger' onClick={(e)=>deleteCart(e,product.id,product.price)}>Delete</button>
        </div>
    </div>
    ))}</div>
    </div>
  )
}
export default Cart
