import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // 初始索引設為 1（跳過前置克隆）
  const [isTransitioning, setIsTransitioning] = useState(false);

  const clonedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, interval);

    return () => clearInterval(timer); // 清除定時器
  }, [currentIndex, isTransitioning, interval]);

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
    if (currentIndex === clonedImages.length - 1) {
      setCurrentIndex(1); // 從最後一張的克隆跳到第一張
    } else if (currentIndex === 0) {
      setCurrentIndex(clonedImages.length - 2); // 從第一張的克隆跳到最後一張
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {clonedImages.map((image, index) => (
          <img
            key={index} src={image}
            alt={`網頁設計, 輪播圖-${index}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-button carousel-button-left">
        &#10094;
      </button>
      <button onClick={nextSlide} className="carousel-button carousel-button-right">
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => ( //_：代表每個圖片，但這個值並不會被使用，所以用 _ 來作為占位符
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
