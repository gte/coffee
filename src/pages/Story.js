import React from "react";
import "../styles/story.css"
import brandStory from "../images/brand-story.avif"

const Story = () => {
    return (
      <div className="story">
        <div className="image-container">
            <img src={brandStory} alt="網頁設計, React 教學, 品牌故事"/>
            <div className="text"><span>品牌故事</span></div>
        </div>
        <section>
            <h1>小巷光影</h1>
            <p>光影交織的溫暖角落</p>
        </section>

        <section id="introduction">
            <h2>品牌起源</h2>
            <p>在繁忙都市的一隅，我們找到了一條靜謐的小巷。當陽光灑進來時，光影交錯，給人一種無與倫比的平靜與溫暖。這條小巷的美好啟發了我們，於是誕生了<strong>「小巷光影」</strong>。我們希望將這份溫暖與平靜帶到每一位客人的生活中，透過一杯杯手工咖啡，串聯出屬於每個人的故事。</p>
        </section>

        <section id="mission">
            <h2>我們的使命</h2>
            <p><strong>小巷光影</strong>的使命是為每一位來到這裡的人，創造一個放鬆心靈的空間。我們堅信，每一杯咖啡都是獨一無二的藝術品，而每一段在<strong>小巷光影</strong>的時光，都是值得珍藏的記憶。</p>
        </section>

        <section id="values">
            <h2>核心價值</h2>
            <ul>
                <li><strong>匠心精神：</strong>我們以最純粹的熱情，專注於咖啡的每一個細節。</li>
                <li><strong>人文關懷：</strong>我們相信，每一個客人都是我們故事的一部分。</li>
                <li><strong>環境永續：</strong>我們承諾使用對環境友善的產品與方式，支持永續發展。</li>
            </ul>
        </section>

        <section id="story">
            <h2>品牌故事</h2>
            <p><strong>「小巷光影」</strong>的誕生源於創辦人一次難忘的旅程。在那次旅途中，偶然發現了一間隱匿於小巷中的咖啡店。陽光透過老舊的窗戶灑進店內，映照出溫暖的光影，而咖啡香氣則與這份景致完美融合。這份體驗讓創辦人深受感動，決定將這樣的氛圍帶回城市，並與更多人分享。</p>
            <p>每一杯咖啡，都是光影與溫度的結晶。我們致力於將這份溫暖與平靜傳遞給每一位到訪者，無論是來享用一杯熱拿鐵，還是帶走一份美好的記憶，我們希望成為你生活中的一處溫暖角落。</p>
        </section>
      </div>  
    )
}

export default Story;