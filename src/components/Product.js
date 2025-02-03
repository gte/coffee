import React, { useEffect, useState, useContext } from "react";
import {useLocation} from "react-router-dom";
import { createPortal } from 'react-dom'
import { CartContext } from "../context/CartContext";
import { IoGridSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { HiMinusSmall } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import "../styles/product.css";
import jsonData from "../data/products.json";
import productTitleImage from "../images/for-product-title.avif";

const Product = () => {

    const pathname = useLocation().pathname;
    const parts = pathname.split("/");
    const lastSegment = parts[parts.length-1];
    const params = new URLSearchParams(window.location.search);
    const searchKeyword = params.get("search"); // 獲取 search 參數的值
    
    const [isGridView, setIsGridView] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [products, setProducts] = useState(jsonData.products);
    const [productTitle, setProductTitle] = useState("");

    const {addToCart} = useContext(CartContext);

    const handleAddToCart = (product) => {
        const item = {
            id: product.id, 
            name: product.name, 
            image: product.image, 
            price: product.price, 
            quantity: quantity,
            amount: product.price * quantity}
        setSelectedProduct(item);
        addToCart(item);
        setIsModalOpen(false);
        setIsPopupVisible(true);
    }

    const renderPopup = () => {
        if(!isPopupVisible) return null;
        return createPortal(
            <div className="popup">
                <FaCheck className="check" /><span>已加入購物車！</span>
            </div>, document.body // 渲染到 body 下
        );
    }

    const openModal = (product) => {
        setIsModalOpen(true);
        setQuantity(1);
        setSelectedProduct(product);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    }

    const minusQuantity = () => {
        setQuantity((prevQuqntity)=>Math.max(1, prevQuqntity-1));
    }

    const addQuantity = () => {
        setQuantity((prevQuqntity)=>prevQuqntity+1);
    }

    useEffect(()=>{
        if(isModalOpen){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    },[isModalOpen])

    useEffect(()=>{
        if(isPopupVisible){
            setTimeout(()=>{
                setIsPopupVisible(false);
            }, 3000)
        }
    }, [isPopupVisible])

    useEffect(()=>{
        if(lastSegment !== "products"){
            const filteredProducts = jsonData.products.filter((product)=>product.tag===lastSegment);
            setProducts(filteredProducts);
        }else if(searchKeyword){
            const searchedProducts = jsonData.products.filter((product) => product.name.includes(searchKeyword));
            setProducts(searchedProducts);
        }else{
            setProducts(jsonData.products);
        }
    },[lastSegment, searchKeyword])

    useEffect(()=>{
        (lastSegment === "hot") ? setProductTitle("人氣精選咖啡") :
        (lastSegment === "featured") ? setProductTitle("招牌精選商品") : 
        (lastSegment === "single") ? setProductTitle("單品咖啡") :
        (lastSegment === "coffee_gift_box") ? setProductTitle("咖啡禮盒") :
        (lastSegment === "equipment") ? setProductTitle("咖啡器具") :
        setProductTitle("所有商品");
    },[lastSegment])

    return (
        <div className="product-container">
            <div className="banner">
                <img className="imagery" src={productTitleImage} alt="" />
                <div className="text"><span>{productTitle}</span></div>
            </div>
            <div className="head">
                {
                    searchKeyword ? <div>搜尋：{searchKeyword}</div> : ""
                }
                <div><span>共有 {products.length} 項商品</span></div>
                {
                    isGridView ? <FaListAlt onClick={()=>setIsGridView(false)}/> : <IoGridSharp onClick={()=>setIsGridView(true)}/>
                }
            </div>
            <div className={isGridView ? "grid-view" : "list-view"}>
                {
                    products.map((product, index)=>(
                        <div key={product.id} className="item">
                            <div className="image-container">
                                <img className="img" src={product.image} id={index} alt="網頁設計, React 教學" />
                            </div>
                            <h3 className="name">{product.name}</h3>
                            <div className="price"><span>NT${product.price.toLocaleString("en-US")}</span></div>
                            <div className="heart-icon">
                                <FaRegHeart />
                            </div>
                            <div className="cart-icon">
                                <FiShoppingCart onClick={()=>openModal(product)}/>
                            </div>
                        </div>
                    ))
                }
                {
                    isModalOpen && selectedProduct && (
                        <div className="modal-backdrop" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
                                <div className="product-info">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                                    <div className="product-text">
                                        <h3>{selectedProduct.name}</h3>
                                        <p>NT${(selectedProduct.price * quantity).toLocaleString("en-US")}</p>
                                    </div>
                                    <IoIosClose className="close" onClick={closeModal}/>
                                </div>
                                <div className="pre-shop">
                                    <div className="quantity-selector">
                                        <HiMinusSmall onClick={minusQuantity}/>
                                        <span>{quantity}</span>
                                        <IoIosAdd onClick={addQuantity}/>
                                    </div>
                                    <button className="addToCart" onClick={()=>handleAddToCart(selectedProduct)}>加入購物車</button>
                                </div>
                            </div>
                        </div>
                    ) 
                }
                {
                    renderPopup()
                }
            </div>
        </div>
    )
}

export default Product;