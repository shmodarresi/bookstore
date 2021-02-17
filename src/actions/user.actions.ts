import { userConstants } from "../constants";
import UserService from '../services/user.service';

export const getUsers = () => dispatch => {
        dispatch({type: userConstants.GETALL_REQUEST});
        return UserService.getAll()
        .then(
           res => {
                   dispatch({type: userConstants.GETALL_SUCCESS , users: res.data})
                },
           err => dispatch({type: userConstants.GETALL_FAILURE , error: err.response.data})
        );
        
}

export const addUser = (user:any) => dispatch => {
        dispatch({type: userConstants.ADD_REQUEST});
        return UserService.addNewUser(user)
        .then(
           res => {
                   dispatch({type: userConstants.ADD_SUCCESS , newUser: res});
                   dispatch(getUsers());
                },
           err => dispatch({type: userConstants.ADD_FAILURE , error: err.response.data})
        );
        
}

export const updateUser = (user: any) => dispatch => {
        dispatch({type: userConstants.UPDATE_REQUEST});
        return UserService.updateUser(user)
        .then(
           res => {
                   dispatch({type: userConstants.UPDATE_SUCCESS , user: res});
                   dispatch(getUsers());
                },
           err => dispatch({type: userConstants.UPDATE_FAILURE , error: err.response.data})
        );
        
}

export const deleteUser = (id: any) => dispatch => {
        dispatch({type: userConstants.DELETE_REQUEST});
        return UserService.deleteUser(id)
        .then(
           res => {
                   dispatch({type: userConstants.DELETE_SUCCESS , user: res});
                   dispatch(getUsers());
                },
           err => dispatch({type: userConstants.DELETE_FAILURE , error: err.response.data})
        );
        
}
