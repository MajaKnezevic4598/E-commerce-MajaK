import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/shopping/shoppingActions";
import { setQtyPlus, setQtyMinus } from "../redux/shopping/shoppingActions";

const Cart = () => {
    const stateFromShop = useSelector(state=>state.shop.cart)
    console.log(stateFromShop)
    console.log('state iz shopa');
    const dispatch=useDispatch();

    const [totalPrice,setTotalPrice] = useState(0)
    const [totalItems,setTotalItems] = useState(0)
   
    useEffect(()=>{
      let items=0;
      let price =0;
      stateFromShop.forEach((item)=>{
        items += item.qty;
        price += item.qty*item.price;
      })
    
      setTotalItems(items);
      setTotalPrice(price)

    },[stateFromShop,totalPrice,totalItems,setTotalItems,setTotalPrice])


    useEffect(()=>{
      console.log("promenio se state iz shopa u efectu")
    },[stateFromShop])

    const shopList = stateFromShop.map(item=>{
       const {title,qty,price,image,id} = item;

       if(qty === 0){
         dispatch(removeFromCart(id))
       }

       return (
         <div className="cart-item-conteiner" key={id}>
          
             
               <div className="cart-image">
                 <img src={image} alt="neki naslov" />
               </div>
               <div className="cart-title">{title}</div>
               <div className="cart-price">$ {price}</div>
               <div className="cart-quantity">
                 <button disabled={qty > 0 ? "" : "disabled"} onClick={() => {dispatch(setQtyMinus(id, 1));}}>-</button>
                 <div className="add-to-qyuantity" onClick={()=>{dispatch(setQtyPlus(id,1))}}>+</div>
                 <div>Quantity {qty}</div>
               </div>
               <div className="total"> Total for item: {qty * price} $</div>
               <div>
                    <button className="remove-item" onClick={() => {dispatch(removeFromCart(id));}}>
                 Remove item
               </button>
               </div>
             
              
             </div>
           
        
       );
    })

    return (
      <div className="cart-conteiner">
        {Object.keys(stateFromShop).length === 0 ? (
          <div>No items in the cart</div>
        ) : (
          <div>
            <div>{shopList}</div>
            <div>
              <div className="total-price-conteiner">
                <div className="total-price">Total Price {totalPrice}</div>
                <div>Total Items : {totalItems} </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}
 
export default Cart;