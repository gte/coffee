import React from "react";
import HotProduct from "./HotProduct";
import jsonData from "../data/products.json";
import "../styles/hot-product-grid.css";

const hotProducts = jsonData.products.filter((product=>product.tag==="hot"))

const HotProductGrid = () => {

    const groupedHotProducts =[];

    for(let i=0; i<= hotProducts.length; i+=2){
        groupedHotProducts.push(hotProducts.slice(i, i+2));
    }

    return (
        <div className="hot-product-grid">
            <div className="hot-product-banner">
                <img className="hot-product-imagery" src="../images/ear-hook-coffee.png" alt="網頁設計, React教學" />
                <div className="hot-product-text"><span>人氣商品推薦</span></div>
            </div>
            <div className="hot-product-count">共有 {hotProducts.length} 項商品</div>
            {
                groupedHotProducts.map((group, rowIndex)=>(
                    <div key={rowIndex} className="hot-product-row">
                        {
                            group.map((product, index)=>(
                                <HotProduct key={index} product={product}/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default HotProductGrid;
