import { SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "./productListTypes";



export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
