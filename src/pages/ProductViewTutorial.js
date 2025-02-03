import React from 'react';
import '../styles/product-view-tutorial.css'; // 引入樣式檔案

const ProductViewTutorial = () => {

  return (
    <div className="product-view-tutorial">
      <h1>商品展示切換：Grid View 與 List View</h1>
      <p>
        本篇教學將展示如何在 <strong>React 中實現 grid view 和 list view 之間的切換</strong>，並且使用從
        <code>product.json</code> 取得的資料來渲染商品列表。我們會利用 <strong>React 的 state 和條件渲染</strong>來達成這個功能。
      </p>

      <div className="step">
        <h2>1. 準備資料</h2>
        <p>首先，我們有一個名為 <code>product.json</code> 的檔案，它包含了商品資料。格式如下：</p>
        <pre>
          <code>{`// product.json
[
  {
    "id": 1,
    "name": "商品 1",
    "price": "$10",
    "image": "https://via.placeholder.com/200x200?text=Product+1"
  },
  {
    "id": 2,
    "name": "商品 2",
    "price": "$20",
    "image": "https://via.placeholder.com/200x200?text=Product+2"
  },
  {
    "id": 3,
    "name": "商品 3",
    "price": "$30",
    "image": "https://via.placeholder.com/200x200?text=Product+3"
  }
]`}</code>
        </pre>
        <p>這些資料包含每個商品的 ID、名稱、價格和圖片 URL。</p>
      </div>

      <div className="step">
        <h2>2. 建立產品展示元件</h2>
        <p>接下來，我們建一個名為 <code>ProductDisplay</code> 的元件，用來顯示商品。這個元件會根據使用者選擇的視圖來渲染商品列表。</p>
        <pre>
          <code>{`import React, { useState } from 'react';
import productsData from './product.json';
import '../styles/product-view-tutorial.css';

const ProductDisplayTutorial = () => {
  const [view, setView] = useState('grid'); // 默認視圖為 grid

  // 切換視圖
  const toggleView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="product-view-tutorial">
      <h1>商品展示切換：Grid View 與 List View</h1>
      <button onClick={toggleView} className="toggle-button">
        切換視圖
      </button>
      <div className={view === 'grid' ? 'grid-view' : 'list-view'}>
        {productsData.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductViewTutorial;`}</code>
        </pre>
        <p>上述程式展示了如何使用 <strong>React 的 useState</strong> 來管理目前的視圖。按下「切換視圖」按鈕時，將切換顯示模式。</p>
        <p><strong>解釋：</strong></p>
        <p>1. 我們創建了一個名為 <code>view</code> 的 state，來儲存目前的視圖，初始值為 'grid'。<br />
           2. 當按鈕被點擊時，會觸發 <code>toggleView</code> 函數來改變視圖。<br />
           3. 根據 <code>view</code> 的值，條件渲染將顯示不同的 CSS 類別（'grid-view' 或 'list-view'）。</p>
      </div>

      <div className="step">
        <h2>3. 設計 CSS 樣式</h2>
        <p>接下來，我們需要為不同的視圖設計相應的 CSS 樣式。這樣，當使用者切換視圖時，顯示效果會有所不同。</p>
        <pre>
          <code>{`.product-view-tutorial {
  text-align: center;
}

.toggle-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}

.grid-view {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.list-view {
  display: block;
}

.product-item {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
}

.product-item img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product-item h3 {
  margin: 10px 0;
}

.product-item p {
  font-size: 18px;
  color: #333;
}`}</code>
        </pre>
        <p>這段 CSS 定義了 grid view 和 list view 的顯示效果。</p>
        <p><strong>解釋：</strong></p>
        <ul>
          <li><code>.grid-view</code>: 使用 CSS grid 來排列商品，將其顯示為三列。</li>
          <li><code>.list-view</code>: 將商品顯示為單列，讓商品之間垂直排列。</li>
          <li><code>.product-item</code>: 定義了商品項目的樣式，包括邊框、圓角、圖片的尺寸等。</li>
        </ul>
      </div>

      <div className="step">
        <h2>4. 測試功能</h2>
        <p>現在，當你按下「切換視圖」按鈕時，商品列表會在 grid 視圖和 list 視圖之間切換。這樣，你就完成了商品展示的視圖切換功能。</p>
      </div>

      <div className="step">
        <h2>5. 結語</h2>
        <p>這樣我們就實現了在 <strong>React 中根據使用者需求來切換 grid view 和 list view 的功能</strong>。趕快來試試吧！</p>
      </div>
    </div>
  );
};

export default ProductViewTutorial;
