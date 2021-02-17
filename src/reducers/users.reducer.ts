import { userConstants } from "../constants";

export const allUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.GETALL_SUCCESS:
      return {
        item: action.users,
      };
    case userConstants.ADD_SUCCESS:
      return {
        newUser: action.newUser,
      };
    default:
      return state;
  }
};


export const addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.ADD_REQUEST:
      return {
        loading: true,
      };
    case userConstants.ADD_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.ADD_SUCCESS:
      return {
        newUser: action.newUser,
      };
    default:
      return state;
  }
};