import axios from 'axios';

const apiJson = axios.create({
    baseURL: 'http://localhost:3000/api',  // Correct property name is baseURL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',

    }
});

apiJson.interceptors.response.use(
    response => response,
    error => {
        console.error("API error : ", error);
        return Promise.reject(error);
    }
);

export default apiJson;
