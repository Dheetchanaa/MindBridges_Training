import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import AllProducts from "./pages/AllProducts";
import Products from "./pages/Products";
import Cart from "./pages/Carts";
import {UserProvider} from "./pages/UserContext";
import { use } from "react";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login/>}></Route>
            <Route path="allProducts" element={<AllProducts/>}></Route>
            <Route path="product" element={<Products/>}></Route>
            <Route path="cart" element={<Cart/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;