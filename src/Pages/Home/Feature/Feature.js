import React from 'react';
import img from '../../../assets/images/woman.png'

const Feature = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">-Ray Bradbury
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">A book has got smell. A new boo smells great. An old book smells even better. An old book smells like ancientEgypt. <span>-Ray Bradbury</span>
                    </p>
                    
                </div>
            </div>
        </section>
    );
};

export default Feature;