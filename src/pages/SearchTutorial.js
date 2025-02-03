import React from 'react';
import '../styles/search-tutorial.css'; // 引入樣式檔案

const SearchTutorial = () => {
  return (
    <div className="search-tutorial">
      <h1>商品搜尋功能教學</h1>
      <p>
        本篇教學將展示如何在 <strong>React 中實現商品搜尋功能</strong>。這個功能包括<strong>搜尋框的開啟與關閉</strong>、<strong>儲存過去搜尋過的關鍵字</strong>，並根據搜尋關鍵字過濾商品列表。
      </p>

      <div className="step">
        <h2>1. 建立搜尋框狀態</h2>
        <p>首先，我們需要建立一個狀態來控制<strong>搜尋框的顯示與隱藏</strong>。</p>
        <pre>
          <code>{`// Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 用來控制搜尋框開關

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <header>
      <button onClick={openSearch}>開啟搜尋</button>
      {isSearchOpen && (
        <div>
          <input type="text" placeholder="搜尋商品" />
          <button onClick={closeSearch}>關閉搜尋</button>
        </div>
      )}
    </header>
  );
};

export default Header;`}</code>
        </pre>
        <p>
          上述程式建立了一個用於顯示與隱藏搜尋框的簡單邏輯，當點擊 "開啟搜尋" 按鈕時，搜尋框顯示出來，並且提供 "關閉搜尋" 按鈕來隱藏搜尋框。
        </p>
      </div>

      <div className="step">
        <h2>2. 儲存與顯示過去的搜尋關鍵字</h2>
        <p>因為我們沒有使用後端程式，因此這裡使用 <strong>React 的狀態管理和瀏覽器的 localStorage 來儲存過去的搜尋關鍵字</strong>，並顯示在搜尋框下方，讓使用者能夠快速選擇。</p>
        <pre>
          <code>{`// Header.js
import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [keywords, setKeywords] = useState(() => JSON.parse(localStorage.getItem('keywords')) || []);
  const searchInputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = searchInputRef.current.value.trim();
    if (value && !keywords.includes(value)) {
      const newKeywords = [...keywords, value];
      setKeywords(newKeywords);
      localStorage.setItem('keywords', JSON.stringify(newKeywords));
    }
  };

  const selectKeyword = (keyword) => {
    searchInputRef.current.value = keyword;
  };

  return (
    <header>
      <form onSubmit={handleSearch}>
        <input ref={searchInputRef} type="text" placeholder="搜尋商品" />
        <button type="submit">搜尋</button>
      </form>
      <div>
        {keywords.map((keyword, index) => (
          <div key={index} onClick={() => selectKeyword(keyword)}>
            {keyword}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;`}</code>
        </pre>
        <p>
          這段程式會將過去的搜尋關鍵字儲存到 <strong>localStorage</strong>，並且在搜尋框下方顯示這些關鍵字。使用者可以點擊其中一個關鍵字來快速搜尋。
        </p>
      </div>

      <div className="step">
        <h2>3. 顯示搜尋結果</h2>
        <p>當使用者輸入搜尋關鍵字並提交表單時，我們將根據關鍵字過濾商品列表並顯示符合條件的商品。</p>
        <pre>
          <code>{`// ProductList.js
import React, { useState, useEffect } from 'react';

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 假設我們有一個函式來獲取所有商品
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>找不到符合條件的商品</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>價格: NT{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;`}</code>
        </pre>
        <p>
          上述程式會根據 searchQuery 過濾商品列表，並展示符合條件的商品。如果找不到符合條件的商品，會顯示一條提示訊息。
        </p>
      </div>

      <div className="step">
        <h2>4. 測試功能</h2>
        <p>
          現在應該可以在頁面中看到搜尋框，並且能夠進行搜尋，顯示符合條件的商品。點擊過去的搜尋關鍵字，也能夠快速進行搜尋。
        </p>
      </div>

      <div className="step">
        <h2>5. 結語</h2>
        <p>
          在這篇教學中，我們學會了如何在 <strong>React 中實現商品搜尋功能，並且儲存過去的搜尋關鍵字以便快速搜尋</strong>。
        </p>
      </div>
    </div>
  );
};

export default SearchTutorial;
