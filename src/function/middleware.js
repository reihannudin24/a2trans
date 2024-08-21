import React from 'react';
import { Navigate } from 'react-router-dom';
import apiAuth from './axiosAuth';

async function getCheck() {
    const token = localStorage.getItem('token');
    const get = await apiAuth.post(`/auth/check?token=${token}`)
    if (get.status === 201) {
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        return <Navigate to="/login" />
    }
}

const PrivateRoute = ({ element, ...rest }) => {

    const token = localStorage.getItem('token');
    const isAuth = localStorage.getItem('isAuth');

    // Check if the user is authenticated
    const isAuthenticated = token && isAuth === 'true'; // Adjust based on your criteria

    if (isAuthenticated) {
        getCheck()
    }

    return isAuthenticated ? element : <Navigate to="/login" />;

};

export default PrivateRoute;
