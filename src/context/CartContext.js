import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState(()=>{
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : []; //parse是將json資料轉換成物件
    })

    const [wishList, setWishList] = useState([]);

    useEffect(()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    },[cartItems]) //stringify是將物件轉成json格式

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id)
            if(existingItem){
                return prevItems.map(item => 
                    item.id === product.id
                    ? {...item, quantity: item.quantity + product.quantity, amount: product.price * (item.quantity + product.quantity)}
                    : item
                )
            }else{
                // return [...prevItems, {...product, quantity: product.quantity}]
                return [...prevItems, product]
            }
        })
    }

    const addToWishList = (product) => {
        setWishList((prevItems) => [...prevItems, product]);
        removeFromCart(product.id);
    }

    const removeFromCart = ( productId => (
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    ))

    const updateQuantity = (productId, action) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if(item.id === productId){
                    const newQuantity = action === "add" ? item.quantity + 1 : item.quantity - 1;
                    return {
                        ...item,
                        quantity: Math.max(1, newQuantity),
                        amount: item.price * Math.max(1, newQuantity)
                    }
                }
                return item;
            })
        })
    }

    return (
        <CartContext.Provider value={{addToCart, cartItems, updateQuantity, removeFromCart, wishList, addToWishList}}>
            {children}
        </CartContext.Provider>
    )
}