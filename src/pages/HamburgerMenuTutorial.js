import React from 'react';
import '../styles/hamburger-menu-tutorial.css';

const HamburgerMenuTutorial = () => {
  return (
    <div className="hamburger-menu-tutorial">
      <h1>漢堡選單的展開與收合教學</h1>
      <p>
        在這篇教學中，我們將實現一個<strong>漢堡選單（Hamburger Menu）</strong>，就像現在這支網頁程式左上角<strong>漢堡選單</strong>一樣。當使用者按下漢堡圖示時，選單會展開並顯示選單項目，當使用者按下選單外面區域或右上角的「X」則收合。我會使用 <strong>React</strong> 來實現這個功能，並配合動畫效果來讓展開收合變得平滑。
      </p>

      <div className="step">
        <h2>1. 建立 React 專案</h2>
        <p>
            首先，我們需要一個 <strong>React 專案</strong>來實現<strong>漢堡選單</strong>。如果你還沒有創建專案，可以使用以下指令創建一個新的 <strong>React 專案</strong>：
        </p>
        <pre>
          <code>npx create-react-app hamburger-menu</code>
        </pre>
        <p>
            然後，進入這個 hamburger-menu 目錄中
        </p>
        <pre>
          <code>cd hamburger-menu</code>
        </pre>
      </div>

      <div className="step">
        <h2>2. 安裝所需的套件</h2>
        <p>如果你需要 icon，我們可以安裝 <strong><code>react-icons</code> 套件</strong>。可以使用以下指令來安裝：</p>
        <pre>
          <code>npm install react-icons</code>
        </pre>
        <p>這樣你就可以使用常見的 icon，例如<strong>漢堡選單 icon 和關閉 icon</strong>。</p>
      </div>

      <div className="step">
        <h2>3. 創建 Header 元件</h2>
        <p>在 <code>src</code> 資料夾下創建一個 <code>components</code> 資料夾，因為<strong>漢堡選單</strong>會放在 header 中，所以請在其中創建 <code>Header.js</code> 檔案。這個元件將負責顯示我們的選單和處理展開與收合的功能。</p>
        <h3>Header.js</h3>
        <pre>
          <code>{`import React, { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="left">
          <IoMdMenu className="hamburger" onClick={openMenu} />
        </div>
        <div className={\`menu \${isMenuOpen ? 'open' : 'hidden'}\`}>
          <div className="close">
            <IoIosClose id="close-icon" onClick={closeMenu} />
          </div>
          <h3>關於我們</h3>
          <ul className="nav-about">
            <li>品牌故事</li>
            <li>品牌理念</li>
            <li>常見問題</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;`}</code>
        </pre>
      </div>
      <div className="step">
        <h2>4. CSS 設計樣式</h2>
        <p>接下來，我們需要為選單和動畫添加一些 CSS 樣式。請在 <code>src/styles</code> 資料夾中創建一個 <code>Header.css</code> 檔案。</p>
        <h3>Header.css</h3>
        <pre>
          <code>{`header {
  position: relative;
  width: 100%;
  background-color: #eee;
  font-size: 14px;
  z-index: 1000;
}

header nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}

header .hamburger {
  font-size: 30px;
  cursor: pointer;
}

header .menu {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 60%;
  height: 100vh;
  padding: 20px;
  overflow: auto;
  flex-direction: column;
  opacity: 1;
  transition: transform 0.3s ease-out;
  z-index: 1000;
}

header .menu.open {
  transform: translateX(0);
}

header .menu.hidden {
  transform: translateX(-100%);
}

header .close {
  display: flex;
  justify-content: flex-end;
}`}</code></pre></div>

      <div className="step">
        <h2>5. 測試功能</h2>
        <p>完成後，請把 Header.js 放到 App.jsx 中，接著可以執行下列命令來測試功能：</p>
        <pre>
          <code>npm start</code>
        </pre>
      </div>

      <div className="step">
        <h2>6. 結語</h2>
        <p>這樣就已經完成了一個基本的<strong>漢堡選單</strong>，並加入了動畫效果，讓展開與收合過程更加平滑。在實際專案中，可以根據需求進一步調整樣式和功能。</p>
      </div>
    </div>
  );
};

export default HamburgerMenuTutorial;
