import api from '../apis/api';

class ProductService {

    getAll() {
        return api.get('/books');
    }

    getById(id: any){
        return api.get(`/books/${id}`);
    }
}

export default new ProductService();