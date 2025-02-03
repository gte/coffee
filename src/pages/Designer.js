import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
// import { FaLine } from "react-icons/fa6";
import "../styles/designer.css";
import soWedding from "../images/so-wedding.png";
import seed from "../images/seed.png";
import teaServing from "../images/tea-serving.png";
import yehliu1 from "../images/yehliu-1.png";
import yehliu2 from "../images/yehliu-2.png";
import soWedding2 from "../images/so-wedding2.png";
import xdesign from "../images/xdesign.png";
import book from "../images/book.png";
import takoyaki from "../images/takoyaki.png";
import brain from "../images/brain.png";
import belle from "../images/belle.png";
import epower from "../images/epower.png";
import mcse from "../images/mcse.png";
import about from "../images/About.png";
import service from "../images/Service.png";
import home from "../images/Home.png";
import productDetails from "../images/ProductDetails.png";
import shoppingCart from "../images/shopping-cart.png";
import checkout from "../images/checkout.png";
import membership from "../images/membership.png";
import contact from "../images/contact.png";
import signInOrSignUp from "../images/sign-in-or-sign-up.png";
import signInWithSecurityCentre from "../images/sign-in-with-securitycentre.png";
import registerAccount from "../images/register-account.png";

const Designer = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        const toogleVisibility = () =>{
            if(window.scrollY > 300){
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        }
        window.addEventListener("scroll", toogleVisibility);
        return () => window.removeEventListener("scroll", toogleVisibility)
    },[])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className="designer">
            
            {
                (isVisible && <div><FaArrowAltCircleUp className="scroll-to-top" size={30} onClick={scrollToTop} /></div>)
            }
            <h1><strong>關於我（網頁設計師）</strong></h1>
            <h2><strong>西元2000年 開始了網頁設計之路</strong></h2>
            <section>
                早在<strong>西元2000年</strong>，網路浪潮剛興起時，我就開始<strong>設計網頁</strong>了，當時，我從研究所畢業，在國小擔任資訊組長，由於學校需要建置網頁，於是便開啟了我的<strong>網頁設計之路</strong>。
            </section>
            <h2><strong>走在浪潮的前端 開發經驗豐富</strong></h2>
            <section>
                我算是<strong>走在浪潮的前端</strong>，當時的Adobe十分火紅，我的開發工具都是Adobe的產品，<span className="highlight">我用<strong>Fireworks</strong>設計版型、切版，用<strong>Dreamweaver</strong>作為開發網頁的IDE工具，用<strong>Flash</strong>來設計動畫</span>。我設計了各式各樣的網頁，有企業行號、資訊產品、婚紗攝影、餐飲美食、資訊種子學校成果展示、飲料店、網界博覽會、網頁設計工作室、新娘秘書、電商平台、二手書商城、科技公司、網路設備公司……等。
            </section>
            <h2><strong>感受一下當時的設計風格</strong></h2>
            <section>
                當時的設計風格跟現在很不一樣，我截了一些圖，讓大家感受一下<strong>當時的網頁版型</strong>，你可能會發現，<span className="highlight">為什麼有些網頁是長方形的，那是因為<strong>當時流行用 Flash 動畫作為首頁</strong>，讓自己的網頁看起來比較炫</span>。
            </section>
            <div className="image-container">
                <img className="so-wedding" src={soWedding} alt="網頁設計, so-wedding" />
                <img className="seed" src={seed} alt="網頁設計, seed" />
                <img className="tea-serving" src={teaServing} alt="網頁設計, tea-serving" />
                <img className="yehliu1" src={yehliu1} alt="網頁設計, yehliu" />
                <img className="yehliu2" src={yehliu2} alt="網頁設計, yehliu" />
                <img className="so-wedding2" src={soWedding2} alt="網頁設計, so-wedding" />
                <img className="xdesign" src={xdesign} alt="網頁設計, xdesign" />
                <img className="book" src={book} alt="網頁設計, book" />
                <img className="takoyaki" src={takoyaki} alt="網頁設計, takoyaki" />
                <img className="brain" src={brain} alt="網頁設計, brain" />
                <img className="belle" src={belle} alt="網頁設計, belle" />
                <img className="epower" src={epower} alt="網頁設計, epower" />
            </div>
            <h2><strong>忙到極限 考取微軟 MCSE</strong></h2>
            <section>
                就這樣，每天在<strong>設計網頁</strong>中度過，前前後後大約<strong>十年的光景</strong>，除了<strong>網頁設計</strong>，<span className="highlight">為了管理學校的伺服器、Firewall、Router等，我還去考了<strong>微軟系統工程師</strong>，取得了<strong>MCSE 證照</strong></span>，如下。
            </section>
            <div className="image-container">
                <img className="mcse" src={mcse} alt="mcse" />
            </div>
            <h2><strong>每天沉浸在建置網路 寫PHP、Asp.Net C# 過著快樂的每一天</strong></h2>
            <section>
                當時每天忙到幾乎都在熬夜，除了<span className="highlight">在學校把電腦教室架設成企業級的<strong>Active Directory網路架構</strong></span>外，假日也都泡在咖啡廳寫程式，一邊寫<strong>PHP</strong>, 一邊研究<strong>Asp.Net C#</strong>，雖然很忙很累，但很充實，也很快樂。
            </section>
            <h2><strong>然後得了恐慌症</strong></h2>
            <section>
                後來，因為職場上出現<strong>黑天鵝事件</strong>，我便黯然離開精采的生命舞台，過著平庸的日子，每天伴著自己的<strong>恐慌症</strong>過日子，看了無數的醫生、吃了無數的藥，生活陷入低谷，覺得人生沒有希望……
            </section>
            <h2><strong>解決問題的能力，來自真實的開發經驗</strong></h2>
            <section>
                不過，所謂「凡走過必留下痕跡」，過去的經驗讓我能夠面對各種挑戰，以前沒日沒夜的在處理<strong>伺服器效能瓶頸</strong>、解決寫程式過程和網站部署過程中的<strong>Bug</strong>等等，這些能力在我生命低潮中還是蠢蠢欲動。
            </section>
            <h2><strong>重新點燃生命火光 埋首研究 Figma+React+Node.js+express</strong></h2>
            <section>
                所以，一直到最近半年，<span className="highlight">我決定再度淌入我熱愛的網頁開發領域</span>，所以，便有了<span className="highlight">這支手機版的虛構的咖啡廳網站（我取名為<strong>Little Tales, 小巷光影</strong>），沒錯，用的是<strong>React</strong> 的開發框架</span>。我想要記錄自己的學習歷程，把自己學習<strong>React</strong>開發前端的過程寫下來，後面的文章，我也會分析我這支網頁程式所用到的<strong>設計技巧</strong>跟大家分享。
                未來，我會以<span className="highlight"><strong>Figma + React.js + Node.js + Express</strong>來開發前後端完整網頁程式及App</span>。通過這些技術，我希望能解決更多複雜的問題，例如<strong>用戶交互優化</strong>與<strong>後端效能強化</strong>，並與更多志同道合的人交流合作。
            </section>
            <h2><strong>下面是我最近的案子 一個賣監視設備的澳洲電商平台 用 Figma 畫的</strong></h2>
            <div className="image-container">
                <img className="about" src={about} alt="網頁設計, Figma, about" />    
                <img className="service" src={service} alt="網頁設計, Figma, service" />    
                <img className="home" src={home} alt="網頁設計, Figma, home" />    
                <img className="product-details" src={productDetails} alt="網頁設計, Figma, product-details" />    
                <img className="shopping-cart" src={shoppingCart} alt="網頁設計, Figma, shopping-cart" />    
                <img className="checkout" src={checkout} alt="網頁設計, Figma, checkout" />    
                <img className="membership" src={membership} alt="網頁設計, Figma, membership" />    
                <img className="contact" src={contact} alt="網頁設計, Figma, contact" />    
                <img className="sign-in-or-sign-up" src={signInOrSignUp} alt="網頁設計, Figma, sign-in-or-sign-up" />    
                <img className="sign-in-with-securitycentre" src={signInWithSecurityCentre} alt="網頁設計, Figma, sign-in-with-securitycentre" />    
                <img className="register-account" src={registerAccount} alt="網頁設計, Figma, register-account" />    
            </div>
            <h2><strong>我的價值：注重細節 精準了解你的需求</strong></h2>
            <section>
                <span className="highlight">我做事很<strong>注重細節</strong>，所以在每個專案中，我都注重與客戶的溝通，確保需求能被<strong>準確理解</strong></span>。我相信這種以<strong>客戶需求為導向</strong>的合作方式，能為專案帶來卓越價值。
                過去的我很<strong>重視自我精進、不斷學習</strong>，<span className="highlight">未來的我，更<strong>重視回饋與分享</strong>，我希望將自己所學分享出去</span>，除了保持對技術的熱忱，也能幫助更多的人。
            </section>
        </div>
    )
}

export default Designer;
