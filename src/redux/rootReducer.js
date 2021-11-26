import productsReducer from "./products/productsListReducer";
import { selectedProductReducer } from "./product/productListReducer";
import shopReducer from "./shopping/shoppingReducer";
import { combineReducers } from "redux";


 const rootReducer = combineReducers({
   allProducts: productsReducer,
   product: selectedProductReducer,
   shop: shopReducer,
 });

 export default rootReducer