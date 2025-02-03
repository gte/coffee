import React from "react";
import { Link } from "react-router-dom";
import "../styles/featured-product.css";


const FeaturedProduct = ({product}) => {
    return (
        <div className="featured-product-box">
            <div className="title-box">招牌精選</div>
            <div className="featured-name">{product.name}</div>
            <div 
                className="featured-photo"
                style={{
                    backgroundImage: `url('${product.image}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top left',
                    backgroundSize: 'cover',
                  }}
            ></div>
            <div className="description">
                <span className="intro">{product.intro}</span>
                <br/><br />
                <span className="price">NT${product.price}</span><br />
                <span className="promotion">{product.promotion}</span>
            </div>
            <Link to="/products/featured"><div className="add-to-cart"><span>立即購買</span></div></Link>
        </div>
    )
}

export default FeaturedProduct;