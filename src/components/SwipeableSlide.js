import React from "react";
import "../styles/swipable-slide.css";

const SwipeableSlide = ({ images }) => {
    return (
        <div className="swipeable-slide">
            <h3>小巷光影（Little Tales）</h3>
            <div className="swipeable-slide-track"> 
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`網頁設計, React 教學示範圖片-${index}`}
                        className="swipeable-img"
                    />
                ))}
            </div>
        </div>
        
    );
};

export default SwipeableSlide;
