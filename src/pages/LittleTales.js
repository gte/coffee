import React from 'react';
import '../styles/little-tales.css';

const LittleTales = () => {
  return (
    <article className="little-tales">
      <h1 className="title">關於這個作品：小巷光影（Little Tales）</h1>
      <p className="intro">
        在數位時代，<strong>網頁設計不僅是一種技術，更是一種藝術</strong>，一種將想法轉化為視覺與互動體驗的能力。
        為了實踐這種能力，我打造了一個虛構的手機版咖啡廳網站——「小巷光影（Little Tales）」，這不僅是一個作品，更是一個學習與分享的過程。
      </p>
      <section>
        <h2 className="section-title">為何打造這個網站？</h2>
        <section>
          <h3>1. 實現常見網頁功能，提升互動體驗</h3>
          <ul>
            <li>漢堡選單的展開與收合，並搭配進場、退場動畫</li>
            <li>商品搜尋功能，支援關鍵字記憶</li>
            <li>利用 Context 全局狀態理實現購物車系統</li>
            <li>輪播圖設計，具備向左、向右滑動及指示器控制</li>
            <li>Grid View 與 List View 的切換</li>
            <li>Modal 彈出視窗</li>
            <li>商品顯示教學</li>
          </ul>
        </section>
        <section>
          <h3>2. 建立教學檔案，幫助初階開發者</h3>
          <p>透過這個專案，我將上述功能的開發過程整理成教學文件，讓開發者能夠參考並應用。</p>
        </section>
        <section>
          <h3>3. 開源分享，推動技術交流</h3>
          <p>程式碼將會上傳至 <strong>GitHub</strong>，讓更多開發者能夠學習與改進，共同進步。</p>
        </section>
        <section>
          <h3>4. 記錄學習軌跡，見證成長</h3>
          <p>「小巷光影」記錄了我在 React.js 開發上的挑戰與突破，為未來積累更多經驗。</p>
        </section>
        <section>
          <h3>5. 與同好交流、學習，建立技術社群</h3>
          <p>希望透過這個作品，與更多<strong>網頁設計愛好者</strong>討論、學習，甚至合作開發更具挑戰性的專案。</p>
        </section>
      </section>
      <section>
        <h2 className="section-title">未來的發展</h2>
        <p>
          「小巷光影」只是起點，我將繼續累積更多作品，探索更多功能與技術，例如<strong>電子商務、個人化部落格、互動式網頁遊戲</strong>等，期望最終能獲得專業的<strong>網頁設計</strong>案。
        </p>
      </section>
    </article>
  );
};

export default LittleTales;
