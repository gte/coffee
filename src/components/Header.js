import React, { useState, useRef, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IoIosClose } from "react-icons/io";
import { LuUserPen } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import '../styles/header.css'
import logo from '../images/logo.png'

const Header = () => {

    const {cartItems} = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [keywords, setKeywords] = useState(()=>{
        return JSON.parse(localStorage.getItem("keywords")) || [];
    })
    const searchInputRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    }
    const openMenu = () => {
        setIsMenuOpen(true);
        setIsModalOpen(true);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsModalOpen(false);
    };
    const openSearch = () => {
        setIsSearchOpen(true);
    }
    const closeSearch = () => {
        setIsSearchOpen(false);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmedValue = searchInputRef.current.value.trim();
        if(trimmedValue && !keywords.includes(trimmedValue)){
            const newKeywords = [...keywords, trimmedValue];
            setKeywords(newKeywords);
            localStorage.setItem("keywords", JSON.stringify(newKeywords))
        }
        searchInputRef.current.value = "";
    
        window.location.href = `/products?search=${encodeURIComponent(trimmedValue)}`;
    }

    const selectKeyword = (keyword) => {
        searchInputRef.current.value = keyword;
    }

    useEffect(()=>{
        localStorage.setItem("keywords", JSON.stringify(keywords))
    },[keywords])

    useEffect(()=> {
        if(isSearchOpen || isMenuOpen){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    },[isSearchOpen, isMenuOpen])

    return (
        <div>
            <header>
                <nav>
                    <div className="left">
                        <IoMdMenu className="hamburger" onClick={openMenu}/>
                        <Link to="/coffee"><img id="logo" src={logo} alt="" /></Link>
                        {
                            (isModalOpen) && (<div className='modal-backdrop' onClick={closeMenu}></div>)
                        }        
                        <div className={`menu ${isMenuOpen ? 'open' : 'hidden'}`}>
                        <div className="close" >
                            <IoIosClose id='close-icon' onClick={closeMenu}/>
                        </div>
                        <h3>關於我們</h3>
                        <ul className='nav-about'>
                            <li><Link to='/coffee' onClick={closeMenu}>首頁</Link></li>
                            <li>
                                <div className='grouped-about' onClick={toggleDropdown}>
                                    <div>小巷光影</div>
                                    {
                                        isDropdownOpen ? 
                                        <MdExpandLess onClick={toggleDropdown} className='dropdown-toggle'/> : 
                                        <MdExpandMore onClick={toggleDropdown} className='dropdown-toggle'/>
                                    }   
                                </div>
                                <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                                    <li><Link to='/coffee/about/story' onClick={closeMenu}>品牌故事</Link></li>
                                    <li><Link to='/coffee/about/values' onClick={closeMenu}>品牌理念</Link></li>
                                    <li><Link to='/coffee/about/faq' onClick={closeMenu}>常見問題</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <h3>商品分類</h3>
                        <ul className='nav-products'>
                            <li><Link to='/coffee/products' onClick={closeMenu}>全部商品</Link></li>
                            <li><Link to='/coffee/products/featured' onClick={closeMenu}>招牌精選</Link></li>
                            <li><Link to='/coffee/products/hot' onClick={closeMenu}>人氣商品</Link></li>
                            <li><Link to='/coffee/products/coffee_gift_box' onClick={closeMenu}>咖啡禮盒</Link></li>
                            <li><Link to='/coffee/products/single' onClick={closeMenu}>單品咖啡</Link></li>
                            <li><Link to='/coffee/products/equipment' onClick={closeMenu}>咖啡器具</Link></li>
                        </ul>
                        <h3>關於這個作品</h3>
                        <ul className='nav-activities'>
                            <li><Link to='/coffee/designer' onClick={closeMenu}>關於我（網頁設計師）</Link></li>
                            <li><Link to='/coffee/contact' onClick={closeMenu}>聯絡作者</Link></li>
                            <li><Link to='/coffee/portfolio' onClick={closeMenu}>關於這個作品</Link></li>
                            <li><Link to='/coffee/hamburger-tutorial' onClick={closeMenu}>漢堡選單的展開與收合教學</Link></li>
                            <li><Link to='/coffee/carousel-tutorial' onClick={closeMenu}>輪播圖教學</Link></li>
                            <li><Link to='/coffee/product-display-tutorial' onClick={closeMenu}>商品顯示教學</Link></li>
                            <li><Link to='/coffee/product-view-tutorial' onClick={closeMenu}>Grid View 和 List View 切換</Link></li>
                            <li><Link to='/coffee/cart-tutorial' onClick={closeMenu}>購物車與context教學</Link></li>
                            <li><Link to='/coffee/modal-tutorial' onClick={closeMenu}>Modal彈出視窗教學</Link></li>
                            <li><Link to='/coffee/search-tutorial' onClick={closeMenu}>商品搜尋功能教學</Link></li>
                        </ul>
                        </div> 
                        <div className={`search ${isSearchOpen ? 'open' : 'hidden'}`}>
                            <div className="close">
                                <IoIosClose id='close-icon' size={24} onClick={closeSearch}/>
                            </div>
                            <div className='search-box'>
                                <IoIosSearch id="search-icon" size={30}/>
                                <form onSubmit={handleSearch} method="get"> 
                                    <input 
                                        ref={searchInputRef}
                                        className="search-input" 
                                        type='text' 
                                        placeholder='搜尋商品'
                                        >
                                    </input>
                                    <button className="search-button" type='submit'>搜尋</button>
                                </form>
                            </div>
                            <div className='search-keywords'>
                                <div className='search-guide'>看看其他人都找了什麼？</div>
                                <div className='keywords-list'>
                                    {
                                        keywords.map((keyword, index) => (
                                            <div 
                                                key={index} 
                                                className='keyword-item' 
                                                onClick={()=>selectKeyword(keyword)}>{keyword}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icon">
                        <Link to='/coffee/designer'><LuUserPen id="designer"/></Link>
                        <Link to='/coffee/cart'><BsCart2 id="cart"/></Link>
                        {cartItems.length > 0 && <div className='cart-count'>{cartItems.length}</div>}
                        <IoIosSearch id="search" onClick={openSearch}/>
                    </div>
                    
                </nav>
            </header>
        </div>
    );
}

export default Header;