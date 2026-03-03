import api from "../components/token/api";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        password: password,
        email: email,
        phone: phone
    }
    return api.post(URL_BACKEND, data);

}

const fetchAllUserApi = () => {
    const URL_BACKEND = "/api/v1/user";
    return api.get(URL_BACKEND);
}
const updateUserAPI = () => {

}

export {
    createUserAPI,
    updateUserAPI,
    fetchAllUserApi
}
