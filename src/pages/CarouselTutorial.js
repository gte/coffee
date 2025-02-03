import '../styles/carousel-tutorial.css';

const CarouselTutorial = () => {
  return (
    <div className="carousel-tutorial">
      <h1>輪播圖教學</h1>
      <p>
        你應該經常看到<strong>圖片輪播</strong>的網頁功能，這次的教學我會教大家如何使用 <strong>React</strong> 來實現這個功能。這個輪播圖可以自動播放、也有動畫效果，也可以手動切換圖片。
      </p>

      <div className="step">
        <h2>1. 建立 React 專案</h2>
        <p>
          首先，我們需要一個 <strong>React</strong> 專案來實現<strong>輪播圖</strong>。如果你還沒有創建專案，可以使用以下指令來創建一個新的 React 專案：
        </p>
        <pre>
          <code>npx create-react-app carousel</code>
        </pre>
        <p>
          完成後，進入這個 carousel 目錄中：
        </p>
        <pre>
          <code>cd carousel</code>
        </pre>
      </div>

      <div className="step">
        <h2>2. 創建 Carousel 元件</h2>
        <p>接下來，我們將創建一個名為 <code>Carousel.js</code> 的元件，這個元件將負責顯示<strong>圖片輪播</strong>功能並處理圖片的過渡效果。</p>
        <p>創建文件 <code>src/components/Carousel.js</code>，並在其中寫下以下代碼：</p>
        <h3>Carousel.js</h3>
        <pre>
          <code>{`import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

// Carousel元件接受兩個props: 
// 1. images: 圖片的URL陣列
// 2. interval: 輪播圖切換的時間間隔（預設為3000毫秒）
const Carousel = ({ images, interval = 3000 }) => {
  // currentIndex用來追蹤目前顯示的圖片索引，預設為1（即第二張圖片）
  const [currentIndex, setCurrentIndex] = useState(1);
  // isTransitioning用來判斷是否正在進行過渡動畫，防止過渡期間重複觸發切換
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 使用images陣列的前後圖片來實現無縫循環，這邊將陣列首尾圖片複製
  const clonedImages = [images[images.length - 1], ...images, images[0]];

  // useEffect：每當currentIndex變化時，設置定時器，進行自動切換
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, interval); // 根據傳入的interval參數設定切換間隔時間

    return () => clearInterval(timer); // 清除定時器，防止內存洩漏
  }, [currentIndex, isTransitioning, interval]);

  // nextSlide：讓currentIndex加1，切換到下一張圖片
  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // prevSlide：讓currentIndex減1，切換到上一張圖片
  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // goToSlide：允許使用者點擊指示器跳轉到指定的圖片
  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // 使用index + 1，因為陣列包含了前後的複製圖片
  };

  // handleTransitionEnd：過渡動畫結束時觸發，更新狀態
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // 如果目前顯示的是最後一張複製圖片，跳轉到第一張圖片
    if (currentIndex === clonedImages.length - 1) {
      setCurrentIndex(1);
    } 
    // 如果目前顯示的是第一張複製圖片，跳轉到最後一張圖片
    else if (currentIndex === 0) {
      setCurrentIndex(clonedImages.length - 2);
    }
  };

  // 渲染輪播圖的內容
  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: \`translateX(-\${currentIndex * 100}%)\`, // 根據currentIndex變化移動圖片
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none", // 設定過渡動畫
        }}
        onTransitionEnd={handleTransitionEnd} // 當過渡動畫結束時，處理狀態更新
      >
        {clonedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={\`Slide \${index}\`}
            className="carousel-image"
          />
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-button carousel-button-left">
        &#10094; {/* 左箭頭，點擊切換到上一張 */}
      </button>
      <button onClick={nextSlide} className="carousel-button carousel-button-right">
        &#10095; {/* 右箭頭，點擊切換到下一張 */}
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={\`indicator \${currentIndex === index + 1 ? "active" : ""}\`}
            onClick={() => goToSlide(index)} // 點擊指示器跳轉到指定圖片
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;`}</code>
        </pre>
        <p>接下來我來解釋每一段代碼的作用和原理：</p>

        <h3>逐段解釋：</h3>
        <p><strong>1. useState 和 useEffect：</strong></p>
        <p>
          在 React 中，<strong>useState</strong> 是用來管理元件狀態的 Hook，它返回兩個值：當前狀態和更新該狀態的函數。這裡我們使用 <strong>useState</strong> 來追蹤當前顯示的圖片索引 (currentIndex) 和是否正在過渡的狀態 (isTransitioning)。
        </p>
        <p>
          <strong>useEffect</strong> 這裡我們使用它來設置定時器，使得<strong>輪播圖</strong>能夠自動播放。每當 currentIndex 或 isTransitioning 改變時，我們就重新設置定時器。
        </p>

        <p><strong>2. clonedImages： </strong></p>
        <p>
          clonedImages 是一個新陣列，它將原來的圖片陣列首尾的圖片進行複製。這樣的做法是為了實現無縫循環的效果，當圖片切換到最後一張時，會顯示第一張圖片，避免顯示空白或重複圖片。
        </p>

        <p><strong>3. handleTransitionEnd：</strong></p>
        <p>
          這個函數會在過渡動畫結束時被觸發，用來更新 isTransitioning 狀態。當過渡結束後，會根據當前顯示的圖片索引來決定是否需要調整 currentIndex，以確保不顯示複製的圖片。
        </p>

        <p><strong>4. CSS 部分：</strong></p>
        <p>
          在 CSS 中，使用 <strong>flex</strong> 來排列圖片，這樣圖片會水平排列。並且設置了過渡動畫 (transition)，使得圖片切換時更加平滑。按鈕和指示器的也設定了樣式，讓整體的畫面更美觀。
        </p>

      </div>

      <div className="step">
        <h2>3. 設計 Carousel 的 CSS 樣式</h2>
        <p>接下來，我們需要為輪播圖設計一些 CSS 樣式來控制圖片顯示、過渡效果和按鈕樣式。</p>
        <p>請在 <code>src/styles/carousel.css</code> 中寫下以下 CSS：</p>
        <h3>carousel.css</h3>
        <pre>
          <code>{`.carousel {
  position: relative;
  width: 100%;
  height: 200px;
  margin: auto;
  overflow: hidden; /* 隱藏超出範圍的圖片 */
}

.carousel-track {
  display: flex; /* 使用flex佈局，讓圖片水平排列 */
  transition: transform 0.5s ease-in-out; /* 設定過渡效果 */
  width: 100%;
}

.carousel-image {
  width: 100%; /* 每張圖片寬度為100% */
  height: 100%; /* 每張圖片高度為100% */
  object-fit: cover; /* 確保圖片填滿區域且不會變形 */
  flex-shrink: 0; /* 禁止圖片縮小 */
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%); /* 使按鈕垂直居中 */
  background-color: rgba(0, 0, 0, 0.5); /* 按鈕背景顏色 */
  color: #fff; /* 按鈕文字顏色 */
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer; /* 鼠標懸停顯示為可點擊 */
  z-index: 2;
}

.carousel-button-left {
  left: 10px; /* 左箭頭位置 */
}

.carousel-button-right {
  right: 10px; /* 右箭頭位置 */
}

.carousel .carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex; /* 使用flex排列指示器 */
  gap: 10px;
  z-index: 2;
}

.carousel .indicator {
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.5); /* 默認為透明的圓點 */
  border: none;
  border-radius: 50%;
  cursor: pointer; /* 鼠標懸停顯示為可點擊 */
  transition: background-color 0.3s;
}

.carousel .indicator.active {
  background-color: rgba(255, 255, 255, 1); /* 當指示器被選中時，改為白色 */
}`}</code>
        </pre>
      </div>

      <div className="step">
        <h2>4. 測試功能</h2>
        <p>完成後，請將 <code>Carousel.js</code> 放入 <code>App.js</code> 中，並插入一些圖片來測試<strong>輪播圖</strong>的功能。</p>
        <h3>App.js</h3>
        <pre>
          <code>{`import React from "react";
import Carousel from "./components/Carousel";
import "./styles/App.css";

function App() {
  const images = [
    "https://via.placeholder.com/600x200/ff7f7f/333333?text=Image+1",
    "https://via.placeholder.com/600x200/7f7fff/333333?text=Image+2",
    "https://via.placeholder.com/600x200/7fff7f/333333?text=Image+3",
  ];

  return (
    <div className="App">
      <h1>React 輪播圖範例</h1>
      <Carousel images={images} interval={3000} />
    </div>
  );
}

export default App;`}</code>
        </pre>
      </div>

      <div className="step">
        <h2>5. 結語</h2>
        <p>這樣就完成了一個簡單的輪播圖，開始動手去做看看吧！</p>
      </div>
    </div>
  );
};

export default CarouselTutorial;
