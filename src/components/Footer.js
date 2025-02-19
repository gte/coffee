import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <Link to="/portfolio"><span>關於這個作品</span></Link><span>︱</span>
            <Link to="/designer"><span>關於作者</span></Link><span>︱</span>
            <Link to="/contact"><span>與作者聯繫</span></Link>
            <div className="copyright"> © 2025 by xDesign</div>
        </div>
    )
}

export default Footer;