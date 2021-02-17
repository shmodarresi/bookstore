import { combineReducers } from 'redux';

import { authReducer } from './auth.reducer';
import { allUsersReducer , addUserReducer } from './users.reducer';
import { allProductsReducer , productReducer } from './product.reducer';
import { orderReducer } from './order.reducer';

export default combineReducers({
    authReducer,
    allUsersReducer,
    addUserReducer,
    allProductsReducer,
    productReducer,
    orderReducer,
});
