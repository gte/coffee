import React from 'react';
import "../styles/values.css";
import brandIdea from "../images/Coffee-Bean-Extract.png"

function Values() {
    return (
        <div className='values'>
            <div className="image-container">
                <img src={brandIdea} alt="網頁設計, React 教學, 品牌理念"/>
                <div className="text"><span>品牌理念</span></div>
            </div>
            <section>
                <h1>小巷光影</h1>
                <p>感受光影之間的美好，啜飲生活的每一刻</p>
            </section>

            <section id="philosophy">
                <h2>品牌理念</h2>
                <p><strong>「小巷光影」</strong>相信，每個人都需要一個地方，來放慢腳步、享受生活的片刻光輝。我們希望透過咖啡與光影的交織，讓每位來訪者都能感受到平凡中的不平凡。</p>
                <p>我們的理念源於三個核心：<strong>人文精神、自然共生與情感連結</strong>。</p>
            </section>

            <section id="core-values">
                <h2>核心理念</h2>
                <ul>
                    <li><strong>人文精神：</strong>我們重視每個人的故事，致力於創造一個包容與尊重的空間，讓每個人在這裡都能找到歸屬感。</li>
                    <li><strong>自然共生：</strong>我們珍惜自然的恩賜，採用永續方式挑選咖啡豆，並承諾減少對環境的影響，讓咖啡的每一口都充滿對地球的感激。</li>
                    <li><strong>情感連結：</strong>我們相信咖啡不僅是一種飲品，更是一座橋樑，連結人與人之間的溫暖與故事。</li>
                </ul>
            </section>

            <section id="vision">
                <h2>願景</h2>
                <p>我們的願景是成為一個不僅提供咖啡，更提供靈感與啟發的品牌。我們希望每位顧客在小巷光影的每一刻，都能感受到生命的光輝，並帶著這份溫暖，走向他們的下一段旅程。</p>
            </section>

            <footer>
                <p>&copy; 2025 <strong>小巷光影</strong> Light Tales. 保留所有權利。</p>
            </footer>
        </div>
    );
}

export default Values;
