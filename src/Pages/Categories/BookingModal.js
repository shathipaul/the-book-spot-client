import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookingModal = ({ booking }) => {
    const { name, location, reSellingPrice } = booking;

    const { user } = useLoaderData();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;

        console.log(productName, price, name, email, location, phone);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='productName' value={name} className="input input-bordered input-warning w-full mb-2" disabled />
                        <input type="text"  value={location} className="input input-bordered input-warning w-full mb-2" disabled />
                        <input type="text" name='price' value={reSellingPrice} className="input input-bordered input-warning w-full mb-2" disabled />
                        <input type="text" name='email' value={user?.email} className="input input-bordered input-warning w-full mb-2" disabled />
                        <input type="text" name='name' value={user?.displayName}
                        className="input input-bordered input-warning w-full mb-2" disabled />
                        <input type="text" name='location' placeholder='Meeting location' className="input input-bordered input-warning w-full mb-2" />
                        <input type="text" name='phone' placeholder='Phone number' className="input input-bordered input-warning w-full mb-5 " />
                        <input className='btn w-full' type="submit" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;