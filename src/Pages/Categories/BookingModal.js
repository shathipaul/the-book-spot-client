import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    const { name, location, reSellingPrice } = booking;

    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const bookings = {
            productName,
            price,
            name,
            email,
            location,
            phone
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooking(null);
                    toast.success('Booking is Successful')
                }
            })

        setBooking(null);
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
                        <input type="text" value={location} className="input input-bordered input-warning w-full mb-2" disabled />
                        <input type="text" name='price' value={reSellingPrice} className="input input-bordered input-warning w-full mb-2" disabled />
                        <input type="text" defaultValue={user?.displayName} name='name'
                            className="input input-bordered input-warning w-full mb-2" disabled />
                        <input type="text" defaultValue={user?.email} name='email' className="input input-bordered input-warning w-full mb-2" disabled />
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