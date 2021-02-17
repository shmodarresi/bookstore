import api from '../apis/api';

class OrderService {
    addOrder(order: any){
        return api.post('/orders', order)
        .then( res => {
           return res.data;
        })
    }

}

export default new OrderService();