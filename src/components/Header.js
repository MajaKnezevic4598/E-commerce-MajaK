import React, {useState,useEffect} from "react";
import { writeStorage } from "@rehooks/local-storage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomizedBadges from "./CustomizedBadges";



const Header = () => {

    const cart = useSelector(state=>state.shop.cart);

  // function useLocalState(localItem){
  //   const [loc,setState] = useState(localStorage.getItem(localItem))

  //     function setLoc(newItem){
  //       localStorage.setItem(localItem,newItem);
  //       setState(newItem)
  //     }

  //   return [loc,setLoc]
  // }

  // const [fruit,setFruit] = useLocalState("apple");
  // const proba = useLocalState(JSON.stringify(cart));
  // console.log('probaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  // console.log(proba)
  //iz local storage vadi taj item
  // const [ajde,setAjde] = useLocalState("proba")
  
 
  return (
    <header>
      <p className="logo">eCommerce</p>

      {/* <p>Fruit: {fruit}</p>
      <button onClick={()=>{setFruit("apple")}}>Apple</button>
       <button onClick={()=>{setFruit("banana")}}>Banana</button>
       <button onClick={()=>{setAjde(JSON.stringify(cart))}}>Molim te radi</button> */}
      <Link to="/" className="home-link">
        All Products
      </Link>

      <Link to="/cart" className="cart-link">
        <CustomizedBadges />
      </Link>

      {/* <div>ukupna kolicina je {Object.keys(stateFromShop).length}</div>
      <div>ovo vucemo iz local Storaga {itemFromLS}</div>
      <div>ovo je proba{updated}</div> */}
    </header>
  );
};

export default Header;
