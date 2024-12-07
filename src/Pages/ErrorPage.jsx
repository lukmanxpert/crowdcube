import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-red-400 font-bold'>404</h1>
                <p>Oops, Page not found...</p>
                <Link to='/' className='cursor-pointer text-green-500 font-bold'>Click to back home..</Link>
            </div>
        </div>
    );
};

export default ErrorPage;