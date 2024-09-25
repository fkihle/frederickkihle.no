import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'react-router-dom';
library.add(fas);

const ContactButton = () => {

    const contactIcon = "w-6 h-6 hover:bg-neutral-700 duration-500 cursor-pointer text-white bg-neutral-800 p-4 opacity-75 rounded-full shadow-lg";

    return (
        <>
            <ul className="fixed bottom-1 right-1 z-50 flex-col items-center justify-center">
            <li>
                <a href='tel:+4795257873'>
                <FontAwesomeIcon icon="fa-solid fa-phone-volume" className={contactIcon} />
                </a>
            </li>
            <li>
                <Link to='/contact'>
                        <FontAwesomeIcon icon="fa-solid fa-comments" className={contactIcon} />
                </Link>
            </li>
            </ul>
        </>
    )
};

export default ContactButton;