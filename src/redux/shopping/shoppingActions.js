import { ADD_TO_CART, REMOVE_FROM_CART, SET_QTY,LOAD_CURRENT_ITEM} from "./shoppingTypes";

export const addToCard = (itemId,product) =>{
    return{
        type: ADD_TO_CART,
        payload:{
            id:itemId,
            product:product
        }
    }
}

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const setQty = (itemId, value)=>{
    return {
        type:SET_QTY,
        payload:{
            id:itemId,
            qty:value
        }
    }

}

export const loadCurrentItem = (item) =>{
    return {
        type:LOAD_CURRENT_ITEM,
        payload:item
    }
}