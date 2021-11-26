import { SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT } from "./productListTypes";

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};