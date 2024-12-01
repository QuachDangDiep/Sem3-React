import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"; // Đảm bảo bạn đã tạo file CSS này

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Hàm để khi người dùng click vào một liên kết, highlight liên kết đó
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Hàm tìm kiếm
  const handleSearch = () => {
    console.log("Tìm kiếm với từ khóa:", searchQuery);
  };

  // Điều hướng đến trang đăng nhập khi người dùng click vào icon người dùng
  const handleUserClick = () => {
    navigate("/login");
  };

  return (
    <div className="header-container">
      {/* Logo */}
      <div className="logo-search-container">
        <div className="logo-header">
          <h1>MyLogo</h1>
        </div>

        {/* Thanh tìm kiếm */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Tìm kiếm</button>
        </div>
      </div>

      {/* Liên kết điều hướng */}
      <div className="navbar-header-link">
        <div
          className={`navbar-header-home ${
            activeLink === "home" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("home")}
        >
          <Link to="/">Trang chủ</Link>
        </div>
        <div
          className={`navbar-header-about ${
            activeLink === "about" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("about")}
        >
          <Link to="/about">Giới thiệu</Link>
        </div>
        <div
          className={`navbar-header-contact ${
            activeLink === "contact" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("contact")}
        >
          <Link to="/contact">Liên hệ</Link>
        </div>
      </div>

      {/* Icon giỏ hàng và người dùng */}
      <div className="navbar-header-container3">
        {/* Icon Giỏ hàng */}
        <div className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          </Link>
        </div>

        {/* Icon Người dùng */}
        <div className="user-icon" onClick={handleUserClick}>
          <FontAwesomeIcon icon={faUser} className="user-icon-style" />
        </div>
      </div>
    </div>
  );
};

export default Header;
