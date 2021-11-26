import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {

     const stateFromShop = useSelector((state) => state.shop.cart);
  return (
    <header>
      <h2>Fake Shop</h2>
      <Link to="/">
        <div>Home</div>
      </Link>

      <Link to="/cart">ovde ide link ka korpi</Link>
      <div>ukupna kolicina je {Object.keys(stateFromShop).length}</div>
    </header>
  );
};

export default Header;
