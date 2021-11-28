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
import StarIcon from "@mui/icons-material/Star";
import {makeStyles} from "@material-ui/core"
import {pink} from "@mui/material/colors"



const useStyles = makeStyles({
  star: {
      fontSize:"4vh",
    marginRight:"1vw"
  }
});


Modal.setAppElement("#root");
const ProductDetails = () => {

  const classes = useStyles()

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
     
      console.log(title)
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
              <div className="content-rating">
                <StarIcon className={classes.star} />{" "}
              
                {rating.rate}
              </div>
              {inCart && (
                <div className="already-in-cart">Product added to cart</div>
              )}
              {!inCart && (
                <button className="add-to-card" onClick={handleClick}>
                  Add to card
                </button>
              )}
              <Modal
                isOpen={modalIsOpen}
                style={{
                  overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
                  content: {
                    top: "35vh",
                    left: "30vw",
                    right: "30vw",
                    bottom: "35vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex:2
                  },
                }}
              >
                <div className="modal-title">{title} added to cart</div>
                <div className="modal-buttons">
                  <button
                    className="close-modal"
                    onClick={() => {
                      setModalIsOpen(false);
                    }}
                  >
                    Close
                  </button>
                  <Link to="/cart" className="go-to-checkout">
                    <button>Go to checkout</button>
                  </Link>
                </div>
              </Modal>
            </div>
          </div>
        )}
      </div>
    );
    
   
}
 
export default ProductDetails;