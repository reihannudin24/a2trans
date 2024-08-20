import axios from 'axios';

const token = localStorage.getItem('token');
// const token = "1|36oD7nrM9AWP1IFrj9vQ280uJTLiB3qmNC5rNd43d7373da0";
const apiAuth = axios.create({
    baseURL: `${process.env.REACT_APP_PANEL_WEBSITE}/api`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  
    }
});

apiAuth.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

apiAuth.interceptors.response.use(
    response => response,
    error => {
        console.error("API error:", error.response ? error.response.data : error.message);
        return Promise.reject(error);
    }
);

export default apiAuth;
