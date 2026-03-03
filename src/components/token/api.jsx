import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL, // URL cơ sở của API của bạn
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

    (error) => {
        //if (error.response && error.response.data) return error.responce.data;
        return Promise.reject(error);
    }
);

// instance.interceptors.response.use(function (response) {
//     if (response.data && response.data.data) return response.data;
//     return response;
// }, function (error) {
//     return Promise.reject(error);
// });
//localStorage.setItem('accessToken', response.data.accessToken);

export default api;