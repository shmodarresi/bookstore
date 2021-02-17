import { orderConstants } from "../constants";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case orderConstants.ADD_REQUEST:
      return {
        loading: true,
      };
    case orderConstants.ADD_FAILURE:
      return {
        error: action.error,
      };
    case orderConstants.ADD_SUCCESS:
      return {
        item: action.order,
      };
    default:
      return state;
  }
};