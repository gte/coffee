import React from "react";
import faq from "../images/faq.jpg";
import "../styles/faq.css"

const FAQ = () => {
  const faqs = [
    {
      question: "小巷光影的營業時間是什麼時候？",
      answer: "我們的營業時間為每日早上 8:00 至晚上 9:00。歡迎隨時來訪！",
    },
    {
      question: "是否需要預訂座位？",
      answer:
        "我們歡迎隨時到訪，座位採先到先得的方式。如果您有特別需求，可以提前致電我們預訂。",
    },
    {
      question: "有提供素食或特殊飲食需求的餐點嗎？",
      answer:
        "是的！我們提供多種素食選擇，以及無麩質和低乳糖的選項，請與服務人員溝通您的需求。",
    },
    {
      question: "是否提供外帶或外送服務？",
      answer:
        "我們提供所有咖啡和餐點的外帶服務。目前也支援外送平台下單，請在平台上搜尋『小巷光影』。",
    },
    {
      question: "咖啡豆是從哪裡進口的？",
      answer:
        "我們的咖啡豆來自全球各地的精選農場，包括哥倫比亞、衣索比亞和印尼，並採用永續方式種植。",
    },
    {
      question: "是否提供免費 Wi-Fi？",
      answer: "是的，我們店內提供免費 Wi-Fi，讓您可以一邊享用咖啡，一邊處理工作或放鬆。",
    },
    {
      question: "店內是否允許攜帶寵物？",
      answer:
        "我們非常歡迎寵物到店，但僅限於戶外座位區。請確保您的寵物不會影響其他客人。",
    },
    {
      question: "是否有舉辦咖啡工作坊或活動？",
      answer:
        "我們定期舉辦咖啡工作坊，內容包括手沖咖啡教學、拉花技巧等。請關注我們的社群平台了解最新活動資訊。",
    },
    {
      question: "是否可以租借場地辦活動？",
      answer:
        "是的！我們提供場地租借服務，適合小型聚會或活動。請提前聯繫我們了解詳情。",
    },
    {
      question: "是否有提供會員制度或優惠？",
      answer:
        "我們目前提供會員卡服務，加入會員可累積點數並享受專屬優惠。詳情請向店員洽詢。",
    },
  ];

  return (
    <div className="faq">
      <div className="image-container">
        <img src={faq} alt="網頁設計, React 教學, faq"/>
        <div className="text"><span>FAQ</span></div>
      </div>
      <h1 style={{fontSize: "16px"}}>常見問題</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {faqs.map((faq, index) => (
          <li
            key={index}
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <h2 style={{ fontSize: "14px", color: "#333" }}>{faq.question}</h2>
            <p style={{ fontSize: "12px", color: "#555" }}>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
