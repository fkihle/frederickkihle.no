import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Link } from 'react-router-dom';
library.add(fas);

const NavBar = () => {

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Commercial', endpoint: '/commercial' },
        { id: 2, text: 'Portraits', endpoint: '/portrait' },
        { id: 3, text: 'Musicians', endpoint: '/musicians' },
        { id: 4, text: 'Product', endpoint: '/product' },
    ];

    return (
        <div className="font-coldiacItalic float-right mr-9 z-20">
        
            {navItems.map(item => (
                <span key={item.id}>
                    <Link to={item.endpoint}><span className="text-white m-4">{item.text}</span></Link>
                </span>
            ))}
        
        </div>
    );
};

export default NavBar;