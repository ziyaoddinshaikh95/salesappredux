import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./B-Product/Poduct";
import Nav from "./A-Navigation/Nav";
const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
