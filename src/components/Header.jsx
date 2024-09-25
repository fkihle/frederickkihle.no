import React, { useState } from "react";
import { Link } from "react-router-dom";
import FKlogo from '../images/logo_white.png';

const Header = () => {
    // state to manage menu visibilty
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Commercial', endpoint: '/commercial' },
        { id: 2, text: 'Portraits', endpoint: '/portrait' },
        { id: 3, text: 'Musicians', endpoint: '/musicians' },
        { id: 4, text: 'Product', endpoint: '/product' },
        { id: 5, text: 'Contact', endpoint: '/contact' },
    ];

    // function to toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <>
            <div className='w-screen h-auto opacity-75 flex flex-wrap justify-between items-center sticky top-0 p-4 z-10 bg-zinc-900'>
                <Link to='/'>
                    <img src={FKlogo} alt="Fotograf Frederick Kihle" className="w-48"/>
                </Link>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
                        &#9776; {/* Burger icon */}
                    </button>
                </div>
                <div className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 lg:max-h-screen lg:opacity-100'}`}>
                    <div className="flex flex-col lg:flex-row lg:ml-auto">
                        {navItems.map(item => (
                            <span key={item.id}>
                                <Link to={item.endpoint}><span onClick={toggleMenu} className="text-white text-xl m-2 float-right hover:underline">{item.text}</span></Link>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;