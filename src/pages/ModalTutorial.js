import React from 'react';
import '../styles/modal-tutorial.css'; // 引入樣式檔案

const ModalTutorial = () => {
 
  return (
    <div className="modal-tutorial">
      <h1>Modal 彈出視窗教學</h1>
      <p>
        本篇教學將展示如何在 <strong>React</strong> 中實現一個簡單的 <strong>Modal 彈出視窗</strong>。這個範例會先建立一個按鈕，當按鈕被點擊時，將顯示一個 modal ，並且可以關閉這個 modal 。
      </p>

      <div className="step">
        <h2>1. 建立 Modal 元件</h2>
        <p>首先，我們需要建立一個名為 <code>Modal</code> 的元件，它將顯示 modal 的內容。</p>
        <pre>
          <code>{`// Modal.js
import React from 'react';
import '../styles/modal-tutorial.css'; // 引入樣式檔案

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // 如果 modal 沒有開啟，則不渲染

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>這是 Modal 彈出視窗</h2>
        <p>你可以在這裡顯示任何你想展示的內容。</p>
        <button onClick={closeModal}>關閉</button>
      </div>
    </div>
  );
};

export default Modal;`}</code>
        </pre>
        <p>這段程式建立了 <code>Modal</code> 元件，它接受兩個 props：<code>isOpen</code> 和 <code>closeModal</code>。如果 <code>isOpen</code> 為 <code>false</code>，則該元件不會顯示任何內容；如果 <code>isOpen</code> 為 <code>true</code>，則顯示 modal。</p>
      </div>

      <div className="step">
        <h2>2. 建立觸發 Modal 的元件</h2>
        <p>接下來，我們將建立一個主元件來觸發 Modal 的開啟和關閉。這個元件將包含一個按鈕來打開 modal。</p>
        <pre>
          <code>{`// App.js
import React, { useState } from 'react';
import Modal from './Modal';
import '../styles/modal-tutorial.css'; // 引入樣式檔案

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <h1>React Modal 教學</h1>
      <button onClick={openModal}>開啟 Modal</button>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default App;`}</code>
        </pre>
        <p>在這段程式中，我們建立了 <code>App</code> 元件，並使用 <strong><code>useState</code> 管理 modal 是否顯示</strong>。當按下「開啟 Modal」按鈕時，會觸發 <code>openModal</code> 函數，將 <code>isModalOpen</code> 設為 <code>true</code>，從而顯示 modal。</p>
      </div>

      <div className="step">
        <h2>3. 設計 CSS 樣式</h2>
        <p>我們需要為 modal 設計 css 樣它可以顯示一個覆蓋整個頁面的彈出視窗。</p>
        <pre>
          <code>{`.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}`}</code>
        </pre>
        <p>這段 CSS 定義了 modal 的外觀。modal 會居中顯示，並且具有透明的背景。當點擊「關閉」按鈕時，modal將被關閉。</p>
      </div>

      <div className="step">
        <h2>4. 測試功能</h2>
        <p>當你按下「開啟 Modal」按鈕時，modal將會顯示出來。你可以點擊「關閉」按鈕來關閉 modal。</p>
      </div>

      <div className="step">
        <h2>5. 結語</h2>
        <p>在這篇教學中，我們學會了如何使用 <strong>React 來實現一個簡單的 Modal 彈出視窗功能</strong>。我們利用 <strong>React 的狀態來控制 modal 的顯示與隱藏</strong>，並設計了相對應的 CSS。</p>
      </div>
    </div>
  );
};

export default ModalTutorial;
