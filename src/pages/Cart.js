import React, {useContext, useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { HiMinusSmall } from "react-icons/hi2";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../styles/cart.css"
import emptyCart from "../images/empty-cart.png";

const Cart = () => {

    const {cartItems, updateQuantity, removeFromCart, addToWishList} = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [doesCheckout, setDoesCheckout] = useState(false);

    const subTotal = cartItems.reduce((acc, product)=>{
       return acc += product.amount;
    },0)

    const openModal = (product) => {
        setIsModalOpen(true);
        setSelectedProduct(product);
    }

    const closeModal = (e) => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    }

    const closeCheckoutModal = () => {
        setDoesCheckout(false);
    }

    const openCheckoutModal = () => {
        setDoesCheckout(true);
    }

    useEffect(()=> {
        if(isModalOpen){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    },[isModalOpen])

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="empty-cart">
                <img src={emptyCart} alt="empty cart" />
                <div className="empty-cart-text">您的購物車是空的</div>
                <Link to="/products" className="go-shopping">再去逛逛</Link>
            </div>
        ) 
    }

    return (
        <div className="cart-container">
            {
                cartItems.map((product, index)=>(
                    <div key={product.id} className="cart">
                        <div className="image-container">
                            <img src={product.image} alt={`網頁設計, React 教學示範圖片-${product.name}`} />
                        </div>
                        <div className="product-info"> 
                            <div className="name">{product.name}</div>
                            <div className="amount">NT${product.amount.toLocaleString("en-US")}</div>
                        </div>
                        <IoIosClose className="close" onClick={() => openModal(product)}/>
                        <div className="quantity-selector">
                            <HiMinusSmall className="minus" onClick={()=>updateQuantity(product.id, "minus")}/>
                            <span className="quantity">{product.quantity}</span>
                            <IoIosAdd className="add" onClick={()=>updateQuantity(product.id, "add")}/>
                        </div>
                        <div className="activity">
                            <FaRegCheckCircle className="check"/>
                            <div className="offer">已符合，開幕慶滿額贈-150元折價券</div>
                            <FaChevronRight className="right-expand"/>
                        </div>
                        <div className="activity">
                            <FaRegCheckCircle className="check"/>
                            <div className="offer">已符合，滿千折百門檻</div>
                            <FaChevronRight className="right-expand"/>
                        </div>
                    </div>
                ))
            }
            {isModalOpen && 
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
                        <IoIosClose className="closeModal" onClick={closeModal}/>
                        <div className="confirm-text">確認刪除此商品？</div>
                        <div className="grouped-button">
                            <div className="add-to-wish" onClick={() => {addToWishList(selectedProduct)}}>加入我的收藏</div>
                            <div className="confirm-remove" onClick={() => {removeFromCart(selectedProduct.id); closeModal();}}>確認刪除</div>
                        </div>
                    </div>
                </div>
            }
            {doesCheckout &&
                <div className="checkout-modal-backdrop" onClick={closeCheckoutModal}>
                    <div className="checkout-modal-content" onClick={(e) => {e.stopPropagation()}}>
                        <IoIosClose className="close-checkout-modal" size={30} onClick={closeCheckoutModal}/>
                        <div className="checkout-text">這是一個虛構的作品，沒有結帳功能</div>
                        <div className="close-checkout" onClick={closeCheckoutModal}>關閉</div>
                    </div>
                </div>
            }
            <div className="summary">
                <span className="delivery">運送至</span>
                <FaChevronRight className="right-expand"/>
                <div className="checkout-box">
                    <div className="details">明細</div>
                    <div className="sub-total">小計: <span className="digital">NT${subTotal.toLocaleString("en-US")}</span></div>
                    <div className="checkout" onClick={openCheckoutModal}>結帳</div>
                </div>
            </div>
        </div> 
    )
}

export default Cart;