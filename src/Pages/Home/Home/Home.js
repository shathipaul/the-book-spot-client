import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* <Banner></Banner>
            <Feature></Feature> */}
           
           <div>
            <h2 className='text-5xl mt-5'>Categories</h2>

           {
            categories.map(category => <div key={category._id} className="avatar placeholder m-10">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-60">
              <Link to={`/categories/${category._id}`} className="text-3xl">{category.categoryName}</Link>
            </div>
          </div> )
           }
           </div>
           
          
        </div>
    );
};

export default Home;