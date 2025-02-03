import '../styles/product-display-tutorial.css';

const ProductDisplayTutorial = () => {
  return (
    <div className="product-display-tutorial">
      <h1>商品顯示教學</h1>
      <p>在這篇教學中，我們將學習如何在 <strong>React 中使用外部的 JSON 檔案來動態顯示產品資料</strong>。我們會利用 <strong>React 的 useEffect 和 useState Hooks</strong> 來加載並顯示資料。</p>

      <div className="step">
        <h2>1. 創建 React 專案</h2>
        <p>首先，你必須先建立一個新的 <strong>React 專案</strong>。如果還沒有，請使用以下命令創建一個專案：</p>
        <pre>
          <code>npx create-react-app product-display</code>
        </pre>
        <p>接著進入專案目錄：</p>
        <pre>
          <code>cd product-display</code>
        </pre>
      </div>

      <div className="step">
        <h2>2. 準備 JSON 資料</h2>
        <p>我們需要一個 <strong>product.json 檔案來儲存產品資料</strong>。將以下內容保存在 `public/data/product.json` 中：</p>
        <pre>
          <code>{`[
  {
    "id": 1,
    "name": "產品A",
    "description": "這是一款超值的產品。",
    "price": 199.99,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 2,
    "name": "產品B",
    "description": "這是一款高端的產品。",
    "price": 299.99,
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 3,
    "name": "產品C",
    "description": "這是一款經濟實惠的產品。",
    "price": 99.99,
    "image": "https://via.placeholder.com/150"
  }
]`}</code>
        </pre>
      </div>

      <div className="step">
        <h2>3. 創建 ProductDisplay 元件</h2>
        <p>接下來，我們將建立一個名為 ProductDisplay.js 的元件來顯示產品資料。在 src/components/ProductDisplay.js 中打出以下程式：</p>
        <pre>
          <code>{`import { useState, useEffect } from 'react';
import './product-display-tutorial.css';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/product.json')
      .then(response => response.json())
      .then(data => setProducts(data)); // 將產品資料存入state
  }, []); // 空依賴陣列表示只在首次渲染時加載資料

  return (
    <div className="product-list">
      <h1>我們的產品</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{\`$\${product.price}\`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;`}</code>
        </pre>
        <p>這段程式會讀取 JSON 資料並顯示每個產品的圖片、名稱、描述和價格。</p>
      </div>

      <div className="step">
        <h2>4. 渲染產品資料</h2>
        <p>在上面的程式中，你會發現是使用 <strong>useEffect 來加載產品資料</strong>，並使用 <strong>useState 來管理產品的狀態</strong>。當資料被成功加載後，使用 map() 方法來渲染每個產品的內容。</p>
        <p>我們的目的是從 <strong>JSON 文件中</strong>讀取每個產品的資料並顯示在頁面上。</p>
      </div>

      <div className="step">
        <h2>5. 設計 CSS 樣式</h2>
        <p>為了讓產品列表看起來更美觀，我們需要為它設計一些基本的 CSS 樣式。在 src/styles/product-display-tutorial.css 中加入以下樣式：</p>
        <pre>
          <code>{`.product-list {
  margin: 20px;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.product {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.product-image {
  width: 100%;
  height: auto;
}

.price {
  font-weight: bold;
  color: #f57c00;
}`}</code>
        </pre>
        <p>這段 CSS 使用了 Grid 布局，讓每行顯示三個產品。每個產品都會顯示圖片、名稱和價格。</p>
      </div>

      <div className="step">
        <h2>6. 在 App.js 中使用 ProductDisplay 元件</h2>
        <p>最後，我們需要在 App.js 中引入並使用 ProductDisplay 元件。請將以下程式添加到 src/App.js 中：</p>
        <pre>
          <code>{`import React from 'react';
import ProductDisplay from './components/ProductDisplay';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>產品展示</h1>
      <ProductDisplay />
    </div>
  );
}

export default App;`}</code>
        </pre>
        <p>這段程式會將 ProductDisplay 元件嵌入到 App.js 中，並顯示產品列表。</p>
      </div>

      <div className="step">
        <h2>7. 結語</h2>
        <p>這樣，我們就完成了顯示產品資料的基本教學。趕快動手試試吧！</p>
      </div>
    </div>
  );
};

export default ProductDisplayTutorial;
