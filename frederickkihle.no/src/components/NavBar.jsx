import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

    // Array containting navigation items
    const navItems = [
        { id: 1, text: 'Commercial', endpoint: '/commercial' },
        { id: 2, text: 'Portraits', endpoint: '/portrait' },
        { id: 3, text: 'Musicians', endpoint: '/musicians' },
        { id: 4, text: 'Product', endpoint: '/product' },
    ];

    const navStyle = "p-4 m-2 cursor-pointer duration-300 font-coldiac text-gray-400 hover:text-white";

    return (
        <div className='w-screen h-14 flex justify-center top-0 sticky z-20'>
        
            {/* Site Navigation */}
            <ul className='flex text-right items-center'>
                {navItems.map(item => (
                    <li key={item.id}>
                        <Link to={item.endpoint}><span className={navStyle}>{item.text}</span></Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default NavBar;