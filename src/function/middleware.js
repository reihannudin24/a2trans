import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
    const token = localStorage.getItem('token');
    const isAuth = localStorage.getItem('isAuth');

    // Check if the user is authenticated
    const isAuthenticated = token && isAuth === 'true'; // Adjust based on your criteria

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
