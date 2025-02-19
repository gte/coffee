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
import { FaArrowAltCircleUp } from "react-icons/fa";
import '../styles/header.css'
import logo from '../images/logo.png'

const Header = () => {

    const {cartItems} = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const [keywords, setKeywords] = useState(()=>{
        return JSON.parse(localStorage.getItem("keywords")) || [];
    })
    const searchInputRef = useRef(null);

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
    
        window.location.href = `/coffee/products?search=${encodeURIComponent(trimmedValue)}`;
        // window.location.href = "/products";
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
                        <Link to="/"><img id="logo" src={logo} alt="網頁設計, React 教學" /></Link>
                        {
                            (isModalOpen) && (<div className='modal-backdrop' onClick={closeMenu}></div>)
                        }
                        {
                            (isVisible && <div><FaArrowAltCircleUp className="scroll-to-top" size={30} onClick={scrollToTop} /></div>)
                        }
                        <div className={`menu ${isMenuOpen ? 'open' : 'hidden'}`}>
                        <div className="close" >
                            <IoIosClose id='close-icon' onClick={closeMenu}/>
                        </div>
                        <h3>關於我們</h3>
                        <ul className='nav-about'>
                            <div onClick={closeMenu} style={{cursor:'pointer'}}><li><Link to='/'>首頁</Link></li></div>
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
                                    <li><Link to='/about/story' onClick={closeMenu}>品牌故事</Link></li>
                                    <li><Link to='/about/values' onClick={closeMenu}>品牌理念</Link></li>
                                    <li><Link to='/about/faq' onClick={closeMenu}>常見問題</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <h3>商品分類</h3>
                        <ul className='nav-products'>
                            <li><Link to='/products' onClick={closeMenu}>全部商品</Link></li>
                            <li><Link to='/products/featured' onClick={closeMenu}>招牌精選</Link></li>
                            <li><Link to='/products/hot' onClick={closeMenu}>人氣商品</Link></li>
                            <li><Link to='/products/coffee_gift_box' onClick={closeMenu}>咖啡禮盒</Link></li>
                            <li><Link to='/products/single' onClick={closeMenu}>單品咖啡</Link></li>
                            <li><Link to='/products/equipment' onClick={closeMenu}>咖啡器具</Link></li>
                        </ul>
                        <h3>關於這個作品</h3>
                        <ul className='nav-activities'>
                            <li><Link to='/designer' onClick={closeMenu}>關於我（網頁設計師）</Link></li>
                            <li><Link to='/contact' onClick={closeMenu}>聯絡作者</Link></li>
                            <li><Link to='/portfolio' onClick={closeMenu}>關於這個作品</Link></li>
                            <li><Link to='/hamburger-tutorial' onClick={closeMenu}>漢堡選單的展開與收合教學</Link></li>
                            <li><Link to='/carousel-tutorial' onClick={closeMenu}>輪播圖教學</Link></li>
                            <li><Link to='/product-display-tutorial' onClick={closeMenu}>商品顯示教學</Link></li>
                            <li><Link to='/product-view-tutorial' onClick={closeMenu}>Grid View 和 List View 切換</Link></li>
                            <li><Link to='/cart-tutorial' onClick={closeMenu}>購物車與context教學</Link></li>
                            <li><Link to='/modal-tutorial' onClick={closeMenu}>Modal彈出視窗教學</Link></li>
                            <li><Link to='/search-tutorial' onClick={closeMenu}>商品搜尋功能教學</Link></li>
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
                        <Link to='/designer'><LuUserPen id="designer"/></Link>
                        <Link to='/cart'><BsCart2 id="cart"/></Link>
                        {cartItems.length > 0 && <div className='cart-count'>{cartItems.length}</div>}
                        <IoIosSearch id="search" onClick={openSearch}/>
                    </div>
                    
                </nav>
            </header>
        </div>
    );
}

export default Header;