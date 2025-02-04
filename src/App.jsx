// src/App.js
import React from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { FaLine } from "react-icons/fa6";
import Home from "./pages/Home"
import Product from "./components/Product";
import Cart from "./pages/Cart"
import Story from "./pages/Story";
import Values from "./pages/Values";
import FAQ from "./pages/FAQ";
import Designer from "./pages/Designer";
import ContactForm from "./pages/ContactForm";
import LittleTales from "./pages/LittleTales";
import "./styles/global.css";
import "./App.css";
import HamburgerMenuTutorial from "./pages/HamburgerMenuTutorial";
import CarouselTutorial from "./pages/CarouselTutorial";
import ProductDisplayTutorial from "./pages/ProductDisplayTutorial";
import ProductViewTutorial from "./pages/ProductViewTutorial";
import CartTutorial from "./pages/CartTutorial";
import ModalTutorial from "./pages/ModalTutorial";
import SearchTutorial from "./pages/SearchTutorial";


const App = () => {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const redirect = params.get("redirect");

  //   if (redirect) {
  //     navigate(redirect, { replace: true });
  //   }
  // }, [navigate]);

  return (
    
    <Router>
        <div className="line-container"><a href="https://line.me/R/ti/p/@730vvcxs"><FaLine className="line" size={30} color="green"/></a></div>
        <CartProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/values" element={<Values />} />
                <Route path="/about/story" element={<Story />} />
                <Route path="/about/faq" element={<FAQ />} />
                <Route path="/products" element={<Product />} />
                <Route path="/products/hot" element={<Product />} />
                <Route path="/products/coffee_gift_box" element={<Product />} />
                <Route path="/products/single" element={<Product />} />
                <Route path="/products/equipment" element={<Product />} />
                <Route path="/products/featured" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/designer" element={<Designer />} />
                <Route path="/portfolio" element={<LittleTales />} />
                <Route path="/hamburger-turorial" element={<HamburgerMenuTutorial />} />
                <Route path="/carousel-tutorial" element={<CarouselTutorial />} />
                <Route path="/product-display-tutorial" element={<ProductDisplayTutorial />} />
                <Route path="/product-view-tutorial" element={<ProductViewTutorial />} />
                <Route path="/cart-tutorial" element={<CartTutorial />} />
                <Route path="/modal-tutorial" element={<ModalTutorial />} />
                <Route path="/search-tutorial" element={<SearchTutorial />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </CartProvider>
    </Router>
    
  )
};

export default App;

