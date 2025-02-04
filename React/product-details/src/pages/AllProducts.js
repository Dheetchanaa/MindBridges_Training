import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext';
import './AllProducts.css'
import { useNavigate } from 'react-router-dom';
const AllProducts = () => {
  const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(response=> response.json())
        .then(data=>setProducts(data));
    },[])
    const {setProductId,user,setUser} = useContext(UserContext);
    const viewProduct = (e,id)=>{
        setProductId(id);
        navigate('/product');
    }
  return (
    <div>
      <section className="allContainer">
      <header>
            {user.username && <h2>Hello,{user.username}</h2>}
            <h2 className="centerText">Explore a World of Products<br />Everything You Need, Delivered to Your Doorstep!</h2>
            <a className='btn btn-warning' href='/'>Login</a>
        </header>
        <section className="mainContainer" id="mainContainer">
            {products.map((product,index)=>{
                return(
                  <div className="card" style={{width: "18rem"}} key={index}>
                  <img src={product.image} className="card-img-top" alt={product.title}/>
                  <div className="card-body">
                    <h6 className="card-text">{product.title}<br/><span className="price">₹{product.price}</span></h6>
                    <p className="card-text">
                      <a className="btn btn-primary" onClick={(e)=>viewProduct(e,product.id)}>View Product</a>
                    </p>
                  </div>
                </div>
            )})}
        </section>
    </section>
    </div>
  )
}
export default AllProducts