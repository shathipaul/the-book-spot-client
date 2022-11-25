import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            {/* {
                categories.map(category => <p>{category._id}</p>)
            } */}
        </div>
    );
};

export default Categories;