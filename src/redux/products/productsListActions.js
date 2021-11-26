import{ FETCH_PRODUCTS_REQUEST,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE, FILTER_PRODUCTS_REQUEST, 
    FILTER_PRODUCTS_SUCCESS, FILTER_PRODUCTS_FAILURE,SORT} from "./productsListTypes";
import axios from "axios";


export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("http://fakestoreapi.com/products",
       {
           mode:'cors',
        header: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }
      }
      )
      .then((response) => {
        // response.data is the users
        const products = response.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchProductsFailure(error.message));
      });
  };
};


export const fetchProductsRequest = () =>{
    return{
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (products) =>{
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload:products
    }
}

export const fetchProductsFailure = (error) =>{
    return {
        type:FETCH_PRODUCTS_FAILURE,
        payload:error
    }
}


/****************************************** FILTER PRODUTCS ******************************************/
export const filterProductsRequest = () =>{
    return{
        type: FILTER_PRODUCTS_REQUEST
    }
}

export const filterProductsSuccess = (products) =>{
    return {
        type: FILTER_PRODUCTS_SUCCESS,
        payload:products
    }
}

export const filterProductsFailure = (error) =>{
    return {
        type:FILTER_PRODUCTS_FAILURE,
        payload:error
    }
}

export const filterProducts = (category) => {
  return (dispatch) => {
    dispatch(filterProductsRequest());
    axios
      .get(`http://fakestoreapi.com/products/category/${category}`, {
          mode:'cors',
        header: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        }
      })
      .then((response) => {
        // response.data is the users
        const products = response.data;
        dispatch(filterProductsSuccess(products));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(filterProductsFailure(error.message));
      });
  };
};


/**********************SORT PRODUCTS */

export const sort = (selectedValue) => {
  return {
    type: SORT,
    payload:selectedValue    
  };
};

