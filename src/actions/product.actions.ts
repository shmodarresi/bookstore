import { productConstants } from "../constants";
import ProductService from '../services/product.service';

export const getProducts = () => dispatch => {
        dispatch({type: productConstants.GETALL_REQUEST});
        return ProductService.getAll()
        .then(
           res => {
                   dispatch({type: productConstants.GETALL_SUCCESS , books: res.data})
                },
           err => dispatch({type: productConstants.GETALL_FAILURE , error: err.data})
        );
        
}

export const getProduct = (id: string) => dispatch => {
        dispatch({type: productConstants.GET_REQUEST});
        return ProductService.getById(id)
        .then(
           res => {
                   dispatch({type: productConstants.GET_SUCCESS , book: res.data});
                },
           err => dispatch({type: productConstants.GET_FAILURE , error: err.response.data})
           
        );
        
}