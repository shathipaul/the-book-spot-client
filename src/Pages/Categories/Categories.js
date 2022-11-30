import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Category from './Category';

const Categories = () => {
    const [booking, setBooking] = useState(null);
    const categories = useLoaderData();
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(category => <Category
                    key={category._id}
                    category={category}
                    setBooking={setBooking}
                ></Category>)
            }
            {
                booking &&
                <BookingModal
                booking={booking}
                setBooking={setBooking}
            ></BookingModal>}
        </div>
    );
};

export default Categories;