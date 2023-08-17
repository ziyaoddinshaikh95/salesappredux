import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./B-Product/Poduct";
import Nav from "./A-Navigation/Nav";
import Cart from "./B-Product/Cart";
const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/card" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
