import { productConstants } from "../constants";

export const allProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case productConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case productConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case productConstants.GETALL_SUCCESS:
      return {
        item: action.books,
      };
    default:
      return state;
  }
};


export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case productConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case productConstants.GET_FAILURE:
      return {
        error: action.error,
      };
    case productConstants.GET_SUCCESS:
      return {
        item: action.book,
      };
    default:
      return state;
  }
};