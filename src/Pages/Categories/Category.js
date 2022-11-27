import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Category = ({ category, setBooking }) => {
    const { name, details, image, location, durationOfUse, buyingPrice, reSellingPrice } = category;
    const {user } = useContext(AuthContext);
    return (
        <div className="card w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 100)}...</p>
                <div className='text-lg font-semibold'>
                    <h3>Original Price: {buyingPrice}</h3>
                    <h3>Re-Selling Price: {reSellingPrice}</h3>
                    <h3>Location to pick: {location}</h3>
                    <h3>Duration of use: {durationOfUse}</h3>
                    <h3 className='text-lg font-semibold'> Seller: 
                        {
                            user?.uid ?
                                <p className="">{user.displayName}</p>
                                :
                                <p className=""></p>
                        }
                    </h3>
                </div>
                <div className="card-actions">
                <label onClick={() => setBooking(category)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Category;