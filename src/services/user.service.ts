import api from '../apis/api';
import authHeader from '../helper/auth-header';

class UserService {

    getAll() {
        return api.get('/users');
    }


    addNewUser(user: any){
        return api.post('/Insertuser', user)
        .then( res => {
           return res.data;
        })
    }

    updateUser(user: any){
        return api.post('/UpdateUser', user)
        .then( res => {
           return res.data;
        })
    }

    deleteUser(uid: any){
        const userId = {id:uid};
        return api.post('/DeleteUser', userId)
        .then( res => {
           return res.data;
        })
    }
}

export default new UserService();