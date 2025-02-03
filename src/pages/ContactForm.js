import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact-form.css";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        countryCode: "+886",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{7,}$/;
        return phoneRegex.test(phone);
    };

    const handlePhoneBlur = () => {
        const { phone } = formData;
        if (!validatePhone(phone)) {
            //...prevErrors 展開運算符會先將舊的狀態物件 prevErrors 複製一份，
            // 然後根據需要修改或添加新的錯誤訊息（如 phone: "行動電話格式不正確"）。
            // 這樣會返回一個全新的 errors 物件，而不是直接修改原有的 prevErrors
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "行動電話格式不正確",
            }));
        } else {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors.phone;
                return newErrors;
            });
        }
    };

    const handleEmailBlur = () => {
        const { email } = formData;
        if (!validateEmail(email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Email 格式不正確",
            }));
        } else {
            //在 handlePhoneBlur() 中使用 const newErrors 
            // 是為了確保你不直接修改原來的 errors 狀態。
            // React 的 setState 函數要求你傳遞一個新的狀態，而不是直接修改現有的狀態物件。
            // 這是因為 React 會根據狀態的變化來重新渲染組件，
            // 直接修改原始狀態物件會造成不必要的副作用，並且可能會導致 React 無法正確地識別狀態更新
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors.email;
                return newErrors;
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, message, countryCode } = formData;
        const newErrors = {};

        if (!name) newErrors.name = "姓名為必填項目";
        if (!phone) newErrors.phone = "行動電話為必填項目";
        else if (!validatePhone(phone)) newErrors.phone = "行動電話格式不正確";
        if (!email) newErrors.email = "Email 為必填項目";
        else if (!validateEmail(email)) newErrors.email = "Email 格式不正確";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});

            const templateParams = {
                to_name: "gte7520@gmail.com",
                from_name: name,
                from_email: email,             // 表單中的郵箱
                phone_number: phone,
                message: `姓名: ${name}\n國碼: ${countryCode}\n行動電話: ${phone}\nEmail: ${email}\n聯繫事項: ${message}`,
            };

            emailjs
            .send(
                "gte7520", //  EmailJS 服務 ID
                "template_gte7520", //  EmailJS 模板 ID
                templateParams,
                "-CLohHxC2s0zFcIkn" //  EmailJS public key
            )
            .then(
                (response) => {
                    console.log("成功寄信", response.status, response.text);
                    setShowPopup(true);
                },
                (error) => {
                    console.error("寄信失敗", error);
                }
            );
        }
    };

  return (
    <>
      {showPopup && (
        <div className="contact-popup">
          <div className="popup-content">
            <p>已成功寄出聯繫表單</p>
            <button onClick={() => setShowPopup(false)}>關閉</button>
          </div>
        </div>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>

        <h1>與創作者聯繫</h1>

        <div className={`form-group ${errors.name ? "error" : ""}`}>
            <label htmlFor="name">姓名<span className="required-symbol">*</span></label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="請輸入您的姓名"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className={`form-group ${errors.phone ? "error" : ""}`}>
          <label htmlFor="phone">行動電話<span className="required-symbol">*</span> (含國碼)</label>
          <div className="phone-group">
            <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                <option value="+886">+886 (台灣)</option>
                <option value="+86">+86 (中國)</option>
                <option value="+852">+852 (香港)</option>
                <option value="+853">+853 (澳門)</option>
                <option value="+65">+65 (新加坡)</option>
            </select>
            <input 
                type="text" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                onBlur={handlePhoneBlur}
                placeholder="123456789"/>
          </div>
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className={`form-group ${errors.email ? "error" : ""}`}>
            <label htmlFor="email">Email<span className="required-symbol">*</span></label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onBlur={handleEmailBlur}
                onChange={handleChange} 
                placeholder="example@gmail.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
            <label htmlFor="message">聯繫事項</label>
            <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="請輸入聯繫內容 (選填)"
            />
        </div>

        <button type="submit" className="submit-button">寄出</button>
      </form>
    </>
  );
};

export default ContactForm;
