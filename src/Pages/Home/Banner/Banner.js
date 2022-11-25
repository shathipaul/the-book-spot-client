import React from 'react';
import img4 from '../../../assets/images/img4.jpg';

const Banner = () => {
    
    return (
        <div className='w-full h-screen bg-cover' 
        style={{background: `url(${img4}) no-repeat center`, backgroundSize:'cover' }}>

            <p>A book has got smell. A new boo smells great. An old book smells even better. An old book smells like ancientEgypt.
                <span>-Ray Bradbury</span>
            </p>

        </div>
    );
};

export default Banner;