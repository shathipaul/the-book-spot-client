import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                       
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;