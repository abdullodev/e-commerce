import React, { FC, useEffect, useState } from "react";
import Header from "../../components/Header";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../../components/ProductsPage";
import FetchProduct from "../../components/FetchProduct";
import Cart from "../../components/Cart";
import Like from "../../components/Like";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrComponent from "../../components/ErrComponent";

const Home: FC = () => {
  // window.addEventListener("scroll", () => {
  //   let home = document.querySelector(".home");

  //   if (window.pageYOffset >= 42) {
  //     home?.classList.add("active");
  //   } else {
  //     home?.classList.remove("active");
  //   }
  // });

  return (
    <div className="home">
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<FetchProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/like" element={<Like />} />
        <Route path="*" element={<ErrComponent />} />
      </Routes>

      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Home;
