import React, {useState,useEffect} from "react";
import { writeStorage } from "@rehooks/local-storage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomizedBadges from "./CustomizedBadges";


const Header = () => {

    const cart = useSelector(state=>state.shop.cart);

  
  
 
  return (
    <header>
      <p className="logo">eCommerce</p>
      <Link to="/" className="home-link">
        All Products
      </Link>
      <Link to="/cart" className="cart-link">
        <CustomizedBadges />
      </Link>
    </header>
  );
};

export default Header;
