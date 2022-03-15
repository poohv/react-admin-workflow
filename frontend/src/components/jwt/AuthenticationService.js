import axios from 'axios'

class AuthenticationService {
    registerJwt(username, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', username);
        // sessionStorage.setItem('authenticatedUser', username)
        //this.setupAxiosInterceptors(this.createJWTToken(token))
        this.setupAxiosInterceptors();
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('user');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token.Token;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }


}