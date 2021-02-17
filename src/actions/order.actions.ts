import { orderConstants } from "../constants";
import OrderService from '../services/order.service';

export const addOrder = (order) => dispatch => {
        dispatch({type: orderConstants.ADD_REQUEST});
        return OrderService.addOrder(order)
        .then(
           res => {
                   dispatch({type: orderConstants.ADD_SUCCESS , order: res});
                },
           err => dispatch({type: orderConstants.ADD_FAILURE , error: err.response.data})
           
        );
        
}