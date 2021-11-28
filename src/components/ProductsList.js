import React, { useEffect,useState,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchProducts } from "../redux/products/productsListActions";
import ProductComponent from "./ProductComponent";
import { filterProducts } from "../redux/products/productsListActions";
import { sort } from "../redux/products/productsListActions";


const ProductsList = () => {

    const isMounted = useRef(false)
    const [category,setCategory] = useState(" ")
    const products = useSelector(state=>state)
    const dispatch = useDispatch()
   
     const [selectValue, setSelectValue] = useState("");

    useEffect(()=>{
      dispatch(fetchProducts())
    },[])

    useEffect(() => {
        if (isMounted.current) {
          dispatch(filterProducts(category));
        } else {
          isMounted.current = true;
        }
    }, [category]);
    //napisacemo funkciju koja prima selectValue kao argument i u zavisnosti od 
    //toga dispetcuje akciju ka stateu
    useEffect(()=>{
        
        if (selectValue !==""){
             dispatch(sort(selectValue));
        } else {
            return {}
        }
    },[selectValue])

    console.log(products)
  
    return (
      <div className="product-list-conteiner">
        <div className="filter-products">
          <button
            id="men's clothing"
            onClick={(e) => {
              setCategory(e.target.id);
            }}
          >
            Men's clothing{" "}
          </button>
          <button
            id="jewelery"
            onClick={(e) => {
              setCategory(e.target.id);
            }}
          >
            Jewelery{" "}
          </button>
          <button
            id="electronics"
            onClick={(e) => {
              setCategory(e.target.id);
            }}
          >
            Electronics
          </button>
          <button
            id="women's clothing"
            onClick={(e) => {
              setCategory(e.target.id);
            }}
          >
            Women's clothing
          </button>
          <button
            id="all-products"
            onClick={() => {
              dispatch(fetchProducts());
            }}
          >
            All products
          </button>
          <div>{category}</div>

          <div className="drop-down-conteiner">
            
            <select value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
             <option value="">Apply filter</option>
              <option value="price-asc">Sort by price lower-to-higer</option>
              <option value="price-desc">Sort by price higer-to-higer</option>
              <option value="name-a-z">Sort by name A - Z</option>
              <option value="name-z-a">Sort by name Z - A</option>
              <option value="rating-asc">Sort by rating lower - to - higer</option>
              <option value="rating-desc">Sort by rating higer - to - lower</option>
            </select>
            <div>{selectValue}</div>
          </div>
        </div>
        <ProductComponent />
      </div>
    );
}
 
export default ProductsList;