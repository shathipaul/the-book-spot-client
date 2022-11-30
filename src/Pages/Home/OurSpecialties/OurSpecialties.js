import React from 'react';
import review from '../../../assets/images/review.png'
import product from '../../../assets/images/product.png'
import delivery from '../../../assets/images/delivery.png'

const OurSpecialties = () => {
    const specialties = [
        {
            id: '01',
            title: 'Positive Reviews',
            details: 'Phosfluorescently fabricate optimal e-commerce rather than diverse catalysts for change. Authoritatively revolutionize clicks-and-mortar.',
            image: review
        },
        {
            id: '02',
            title: 'Real Products',
            details: 'Phosfluorescently fabricate optimal e-commerce rather than diverse catalysts for change. Authoritatively revolutionize clicks-and-mortar.',
            image: product
        },
        {
            id: '03',
            title: 'On Time Delivery',
            details: 'Phosfluorescently fabricate optimal e-commerce rather than diverse catalysts for change. Authoritatively revolutionize clicks-and-mortar.',
            image: delivery
        }
    ]
    return (
        <section className="my-10 dark:bg-gray-800 dark:text-gray-100 rounded-lg">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Why should you us?</h2>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    specialties.map(specialty => <div key={specialty.id} className="flex flex-col items-center p-4">
                        <img src={specialty.image} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">{specialty.title}</h3>
                        <div className="space-y-1 leading-tight text-center mb-5">
                            <p>{specialty.details}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default OurSpecialties;