import Modal from 'react-modal'
import React, { useEffect,useState } from "react";
import { useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/product/productListActions";
import { addToCard } from "../redux/shopping/shoppingActions";
import axios from "axios";



Modal.setAppElement("#root");
const ProductDetails = () => {

   const cartState = useSelector((state) => state.shop.cart);
    const product = useSelector((state) => state.product);
    
    const [modalIsOpen,setModalIsOpen] = useState(false)

   
    const [local,setLocal] = useState(localStorage.getItem("cartItems"))
    

  
    useEffect(()=>{
     
     setLocal(localStorage.getItem("cartItems"))
    },[])
    useEffect(()=>{
       localStorage.setItem("localShop", JSON.stringify(cartState));
       setLocal(localStorage.getItem("cartItems"));
      
    },[cartState])

    
   
      
   

    const dispatch = useDispatch();
     const { productId } = useParams();
     const { image, title, id, description, price, category,rating } = product;
    
     const inCart = cartState.some(item=>item.id === id);
     console.log(inCart)
 
const fetchProductDetails = async () => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => {
      console.log(err);
    });
  dispatch(selectedProduct(response.data));
};

useEffect(() => {
  if (product && productId !== "") fetchProductDetails();
  return () => {
    dispatch(removeSelectedProduct());
  };
}, [productId]);

 const handleClick = () =>{
   dispatch(addToCard(id,product));
   setModalIsOpen(true);
 }

    return (
      <div className="product-detail-main-conteiner">
        {Object.keys(product).length === 0 ? (
          <div>....Loading</div>
        ) : (
          <div className="product-detail-conteiner">
            <div className="image-conteiner">
              <img src={image} alt="" className="product-detail-image" />
            </div>
            <div className="content-conteiner">
              <div className="content-title">{title}</div>
              <div className="content-price">$ {price}</div>
              <div className="content-category">{category}</div>
              <div className="content-description">{description}</div>
              <div className="content-rating">{rating.rate}</div>
              {inCart && (
                <div className="already-in-cart">Product added to cart</div>
              )}
              {!inCart && (
                <button className="add-to-card" onClick={handleClick}>
                  Add to card
                </button>
              )}
              <Modal isOpen={modalIsOpen}>
                <div>Modal Title</div>
                <div>Modal Body</div>
                <button onClick={()=>{setModalIsOpen()}}>Close</button>
               <Link to="/cart">  <button>Go to checkout</button> </Link>
              </Modal>
            </div>
          </div>
        )}
      </div>
    );
    
   
}
 
export default ProductDetails;