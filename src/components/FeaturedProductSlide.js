import React, { useState, useEffect } from "react";
import "../styles/featured-product-slide.css";
import FeaturedProduct from "./FeaturedProduct";
import jsonData from "../data/products.json";

const Carousel = () => {

  const products = jsonData.featuredProducts;

  const [currentIndex, setCurrentIndex] = useState(1); // 初始索引設為 1（跳過前置克隆）
  const [isTransitioning, setIsTransitioning] = useState(false);

  const featuredProducts = [FeaturedProduct,FeaturedProduct,FeaturedProduct]
  const clonedFeaturedProducts = [FeaturedProduct, FeaturedProduct, FeaturedProduct,FeaturedProduct,FeaturedProduct];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(timer); // 清除定時器
  }, [currentIndex, isTransitioning]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // 跳過前置克隆，直接定位到圖片
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // 無縫過渡處理
    if (currentIndex === clonedFeaturedProducts.length - 1) {
      setCurrentIndex(1); // 從最後一張的克隆跳到第一張
    } else if (currentIndex === 0) {
      setCurrentIndex(clonedFeaturedProducts.length - 2); // 從第一張的克隆跳到最後一張
    }
  };

  return (
    <div className="product-slide">
      <div
        className="product-slide-track"
        style={{
          width: `calc(100vw*${clonedFeaturedProducts.length})`,
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {clonedFeaturedProducts.map((FeaturedProduct, index) => (
          <FeaturedProduct
            product={products[index]}
            key={index}
            className="product-slide-component"
          />
        ))}
      </div>
      <button onClick={prevSlide} className="product-slide-button product-slide-button-left">
        &#10094;
      </button>
      <button onClick={nextSlide} className="product-slide-button product-slide-button-right">
        &#10095;
      </button>
      <div className="product-slide-indicators">
        {featuredProducts.map((_, index) => ( //_：代表每個圖片，但這個值並不會被使用，所以用 _ 來作為占位符
          <button
            key={index}
            className={`indicator ${currentIndex === index + 1 ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
