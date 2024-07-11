import React from "react";

import Navbar from "@/pages/home/HomePage/Navbar/Navbar";
import Carousel from "@/pages/home/HomePage/Carosel/Carousel";
import Banners from "@/pages/home/HomePage/Banner/Banners";
import ProductList from "@/pages/home/HomePage/Product/ProductList";
import "./HeroHeader.scss";

function HeroHeader() {
  return (
    <>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Carousel />
        </main>
        <Banners />
      </div>
      <div className="product">
        <ProductList />
      </div>
    </>
  );
}

export default HeroHeader;
