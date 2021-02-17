import { userConstants } from "../constants";
import AuthService from '../services/auth.service';

export const login = (username: any,password: any) => dispatch => {
    return AuthService.login(username,password)
        .then(
            res => {
                dispatch({
                    type: userConstants.LOGIN_SUCCESS,
                    user: res,
                  });
            },
            err => dispatch({
                    type: userConstants.LOGIN_FAILURE,
                    // error: err.response.data
            })
        );
}

export const logout = () => {
        AuthService.logout();
        return {type: userConstants.LOGOUT}
}