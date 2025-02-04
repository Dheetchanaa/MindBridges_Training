import React, { createContext, useState } from 'react'

export const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user,setUser] = useState({email:'',username:''})
    const [productId, setProductId] = useState(null);
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [price, setPrice] = useState(0);
  return (
    <UserContext.Provider value={{user,setUser,productId,setProductId,cart,setCart,cartCount,setCartCount,price,setPrice}}>
        {children}
    </UserContext.Provider>
  )
}