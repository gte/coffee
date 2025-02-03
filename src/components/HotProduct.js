import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import "../styles/hot-product.css";

const HotProduct = ({product}) => {
    
    return (
        <div className="hot-product">
            <div className="img-container">
                <img className="img" src={product.image} alt="網頁設計, 熱門商品" />
            </div>
            <div className="name">
                <span>{product.name}</span>
            </div>
            <div className="info">
                <div className="price">{product.price}</div>
                <div className="icons">
                    <div className="heart-icon">
                        <CiHeart />
                    </div>
                    <div className="cart-icon">
                        <BsCart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotProduct;