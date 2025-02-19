import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./pages/productsRedux/store";
import { TopHeader } from "./pages/TopHeader";
import { TitleHeader } from "./pages/TitleHeader";
import { NavHeader } from "./pages/NavHeader";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Help } from "./pages/Help";
import { Products } from "./pages/products";
import { ProductDetails } from "./pages/productDetails";
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <TopHeader />
          <TitleHeader />
          <NavHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:categoryName" element={<Products />}/>
            <Route path="/productsDetails/:productName" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
