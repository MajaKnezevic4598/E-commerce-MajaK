import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const productList = products.map((product) => {
    let { id, title, image, price, category } = product;
    let newTitle = title.split(" ");
    const slicedTitle = newTitle.slice(0, 6);
    title = slicedTitle.join(" ")
  
    

    return (
      <div className="product-conteiner" key={id}>
        <Link to={`/products/${id}`}>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </Link>
        <div className="content">
          <Link to={`/products/${id}`} className="link-title">
            <div className="title">{title}</div>
          </Link>
          <div className="price">$ {price}</div>
          {/* <div className="category">{category}</div> */}
        </div>
        <button className="add-to-card-product">Add Item</button>
      </div>
    );
  });
  return <div className="products-conteiner">{productList}</div>;
};

export default ProductComponent;
