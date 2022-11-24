import React from 'react';
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';

const Banner = () => {
    
    return (
        <div className='w-full h-screen bg-no-repeat bg-cover' 
        style={{background: `url(${img2})`}}>

            <p>A book has got smell. A new boo smells great. An old book smells even better. An old book smells like ancientEgypt.
                <span>-Ray Bradbury</span>
            </p>

        </div>
    );
};

export default Banner;