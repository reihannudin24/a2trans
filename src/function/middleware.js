import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
    const token = localStorage.getItem('token');
    const isAuth = localStorage.getItem('isAuth');
    const cookies = localStorage.getItem('cookies');

    const isAuthenticated = token && isAuth === 'true' && cookies; // Adjust based on your criteria

    return isAuthenticated ? element :element;
};

export default PrivateRoute;
