import React from "react";
import { Link } from "react-router-dom";
import FKlogo from '../images/logo_white.png';

const Header = () => {
        // Array containing navigation items
        const navItems = [
            { id: 1, text: 'Commercial', endpoint: '/commercial' },
            { id: 2, text: 'Portraits', endpoint: '/portrait' },
            { id: 3, text: 'Musicians', endpoint: '/musicians' },
            { id: 4, text: 'Product', endpoint: '/product' },
        ];
        
    return (
        <>
            <div className='w-screen h-auto opacity-75 flex flex-wrap justify-center items-center sticky font-coldiacItalic top-0 p-4 z-10 bg-zinc-900'>
                <Link to='/'>
                    <img src={FKlogo} alt="Fotograf Frederick Kihle" className="w-48"/>
                </Link>
        
            <div className="flex flex-wrap w-full justify-center">
                {navItems.map(item => (
                    <span key={item.id}>
                        <Link to={item.endpoint}><span className="text-white text-xl m-2 hover:underline">{item.text}</span></Link>
                    </span>
                ))}
            </div>
        </div>
        </>
    );
};

export default Header;