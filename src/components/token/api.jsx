import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/', // URL cơ sở của API của bạn
    timeout: 10000,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});

api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

//localStorage.setItem('accessToken', response.data.accessToken);

export default api;