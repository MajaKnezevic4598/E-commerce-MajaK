import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCard } from "../redux/shopping/shoppingActions";



const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.shop.cart);

  // let storageL = localStorage.getItem("localShop") ? (localStorage.getItem("localShop")) : ([])
  // let numL = localStorage.getItem("cartItems") ? (localStorage.getItem("cartItem")): (0)
  // const [local,setLocal]=useState(storageL);
  // const [num,setNum] = useState(numL)

 
  // useEffect(()=>{
  //   localStorage.setItem("localShop",local);
  //   const a=localStorage.getItem("localShop");
  //   setLocal(a)
  //   const b = localStorage.getItem("cartItems");
  //   setNum(b)
  // })

  // useEffect(() => {
  //   // console.log(cartState);
  //   // console.log("ovo je state iz useEffecta kada dodamo u local storage");
  //   localStorage.setItem("localShop", JSON.stringify(cartState));
  //   localStorage.setItem("cartItems", Object.keys(cartState).length);
  //   const a = localStorage.getItem("localShop");
  //   setLocal(a);
  //   const b = localStorage.getItem("cartItems");
  //   setNum(b);
   
  // }, [cartState]);

  

  const productList = products.map((product) => {
    let { id, title, image, price, category } = product;
    let newTitle = title.split(" ");
    const slicedTitle = newTitle.slice(0, 4);
    title = slicedTitle.join(" ");

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
        <button
          className="add-to-card-product"
          onClick={() => {
            dispatch(addToCard(id, product));
          }}
        >
          Add Item
        </button>

      {/* <div>{num} iz local stata</div> */}
        
      </div>
    );
  });
  return <div className="products-conteiner">{productList}</div>;
};

export default ProductComponent;
