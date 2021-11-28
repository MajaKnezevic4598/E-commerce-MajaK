import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_QTY_PLUS,
  SET_QTY_MINUS,
  LOAD_CURRENT_ITEM,
} from "./shoppingTypes";

//moramo da vidimo kako da prosledimo kao action payload allProducts
const initialState = {
    products :[],//{img,price,title,desc}
    cart : [],//isto kao product plus kolicina se ovde doda
    currentItem :null
}

const shopReducer = (state = initialState,action) =>{
    switch (action.type) {
      case ADD_TO_CART:
        const itemFromAction = action.payload.product;
        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...itemFromAction, qty: 1 }],
        };

      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case SET_QTY_PLUS:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          ),
        };

      case SET_QTY_MINUS:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty - action.payload.qty }
              : item
          ),
        };
      case LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      default:
        return state;
    }
}

export default shopReducer;