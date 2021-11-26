import { useSelector } from "react-redux";

const Cart = () => {
    const stateFromShop = useSelector(state=>state.shop.cart)
    console.log(stateFromShop)
    console.log('state iz shopa')
    const shopList = stateFromShop.map(item=>{
       const {title,qty,price,image} = item;
       return(
           <div className="cart-item-conteiner">
                <div className="cart-image">
                    <img src={image} alt="neki naslov" />
                </div>
               <div className="cart-title">{title}</div>
               <div className="cart-price">{price}</div>
               <div className="cart-quantity">kolicina {qty}</div>
           </div>
       )
    })

    return (
      // <div className="cart-conteiner">
      //     <div>Cartica</div>
      // </div>
      <div className="cart-conteiner">
        <p>Ovde ide duzina {Object.keys(stateFromShop).length}</p>
        {shopList}
      </div>
    );
}
 
export default Cart;