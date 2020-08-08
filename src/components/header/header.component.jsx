import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.style.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="Logo" />
    </Link>
    <div className="options">
      <div className="option">
        <Link className="shop" to="/shop">
          SHOP
        </Link>
      </div>
      <div className="option">
        <Link className="shop" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
