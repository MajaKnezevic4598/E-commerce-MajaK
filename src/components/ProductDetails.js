import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/product/productListActions";
import { addToCard } from "../redux/shopping/shoppingActions";
import axios from "axios";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
   //u stateu mi je jedan product
    
    const dispatch = useDispatch();
     const { productId } = useParams();
     const { image, title, id, description, price, category,rating } = product;
    

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
              <button className="add-to-card" onClick={()=>{dispatch(addToCard(id,product))}}>Add to card</button>
            </div>
          </div>
        )}
      </div>
    );
    
   
}
 
export default ProductDetails;