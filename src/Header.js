import React from "react";
import "./Header.css";
import { Search, ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
/* eslint-disable */
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Search className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요!</span>
          <span className="header_optionLineTwo">로그인</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLineTwo">주문내역</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">개인 설정</span>
          <span className="header_optionLineTwo">윤우중</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwoheader_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
