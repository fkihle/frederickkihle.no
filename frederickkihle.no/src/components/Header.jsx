import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";

const Header = () => {

    const headerStyle = "p-4 m-2 font-coldiac";
    const linkStyle = "cursor-pointer duration-300 hover:text-white";

    return (
        <>
            <div className='w-screen h-auto border-b border-gray-400 flex justify-center text-gray-400 z-10'>
        
            {/* Site Navigation */}

            <ul className='flex w-full justify-between items-center'>
                <li className={`${headerStyle} ${linkStyle}`}><Link to="/">Frederick Kihle '85</Link></li>
                <li className={`${headerStyle}`}>Commercial & Portrait Photographer</li>
                <li className={`${headerStyle} ${linkStyle}`}><Link to="/contact">Check Availability</Link></li>
            </ul>

            </div>
            <NavBar />
        </>
    );
};

export default Header;