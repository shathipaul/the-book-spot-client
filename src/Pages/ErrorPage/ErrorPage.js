import React from 'react';
import img from '../../assets/images/error.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img className='w-1/2' src={img} alt="" />
        </div>
    );
};

export default ErrorPage;