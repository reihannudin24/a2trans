import axios from 'axios';

// Membuat instance axios baru dengan konfigurasi khusus untuk API JSON
const apiJson = axios.create({
    baseURL: `${process.env.REACT_APP_PANEL_WEBSITE}/api`,
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
