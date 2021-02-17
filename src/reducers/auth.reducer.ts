import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user') || '{}');
const initialState = user ? { loggedIn: true, user } : {} ;

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false
            };
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}