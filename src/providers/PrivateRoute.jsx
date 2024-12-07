import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='h-60 flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;