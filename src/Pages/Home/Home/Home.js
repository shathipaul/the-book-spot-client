import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import OurSpecialties from '../OurSpecialties/OurSpecialties';
const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            {/* <Feature></Feature> */}
           
           <div className='flex flex-col lg:flex-row justify-center items-center'>
            <h2 className='text-5xl text-center'>Product Categories</h2>

           {
            categories?.map(category => <div key={category._id} className="avatar placeholder m-10">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-60">
              <Link to={`/categories/${category.categoryId}`} className="text-3xl">{category.categoryName}</Link>
            </div>
          </div> )
           }
           </div>
           <OurSpecialties></OurSpecialties>
          
        </div>
    );
};

export default Home;