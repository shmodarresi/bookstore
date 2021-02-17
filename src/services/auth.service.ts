import api from '../apis/api';

class AuthService {
    login = (username: string, password: string) => {

        return api.post('/login', {
            username,
            password
        }).then(res => {
            if (res.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(res.data));
                return res.data;
            }
        })
    }

    logout = () => {
        localStorage.removeItem('user');
    }
}

export default new AuthService();
