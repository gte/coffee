import React from 'react';
import '../styles/cart-tutorial.css'; // 引入樣式檔案

const CartTutorial = () => {

  return (
    <div className="cart-tutorial">
      <h1>購物車與 Context 教學</h1>
      <p>
        本篇教學將展示如何在 <strong>React 中使用 Context API</strong> 實現一個簡單的<strong>購物車</strong>功能。我們會使用 <strong>Context 來管理購物車的狀態</strong>，並且展示如何進行商品的加入、刪除與數量更新。
      </p>

      <div className="step">
        <h2>1. 建立購物車上下文 (CartContext)</h2>
        <p>首先，我們需要建立一個名為 <code>CartContext</code> 的上下文，用來管理購物車中的商品。</p>
        <pre>
          <code>{`// CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};`}</code>
        </pre>
        <p>上述程式創建了 <strong><code>CartContext</code></strong>，並提供了三個功能：<code>addToCart</code>、<code>removeFromCart</code> 和 <code>cartItems</code>。</p>
      </div>

      <div className="step">
        <h2>2. 創建購物車頁面 (Cart)</h2>
        <p>接下來，我們將建立一個名為 <strong><code>Cart</code></strong> 的元件，來顯示購物車中的商品並處理相應的操作。</p>
        <pre>
          <code>{`// Cart.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>購物車</h1>
      {cartItems.length === 0 ? (
        <p>您的購物車是空的</p>
      ) : (
        <div className="cart-list">
          {cartItems.map(product => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>價格: NT{product.price}</p>
                <p>數量: {product.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(product.id)}>刪除</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;`}</code>
        </pre>
        <p>在這段程式中，我們使用 <strong><code>useContext</code></strong> 來訪問購物車的內容並展示商品。當商品的刪除按鈕被點擊時，會觸發 <code>removeFromCart</code> 函數來刪除該商品。</p>
      </div>

      <div className="step">
        <h2>3. 設計 CSS 樣式</h2>
        <p>接著設計一些 CSS 樣式來展示購物車頁面，讓它看起來更加美觀。</p>
        <pre>
          <code>{`.cart-container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.product-info {
  flex: 1;
  text-align: left;
}

button {
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}`}</code>
        </pre>
        <p>這段 CSS 設置了<strong>購物車</strong>頁面的基本樣式，包括商品列表、刪除按鈕和商品展示的排版。</p>
      </div>

      <div className="step">
        <h2>4. 測試功能</h2>
        <p>現在，你應該可以在<strong>購物車</strong>頁面中看到商品列表，並且可以點擊「刪除」按鈕來移除商品。還可以將商品加入<strong>購物車</strong>進行測試。</p>
      </div>

      <div className="step">
        <h2>5. 結語</h2>
        <p>在這篇教學中，學會了如何在 <strong>React 中使用 Context API</strong> 來管理<strong>購物車</strong>的狀態，並實現了商品的加入、刪除與顯示功能。這樣的設計讓我們可以更容易地管理應用程式中的全局狀態。</p>
      </div>
    </div>
  );
};

export default CartTutorial;
