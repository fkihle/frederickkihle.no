import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import ContactForm from "./ContactForm";
library.add(fas)

const ContactPage = () => {
    return (
        <div className="flex-col content-center px-4 py-2 mt-16">
            <div>

                <ul className=" my-4 max-w-lg mx-auto p-4 border rounded-md shadow-md bg-white">
                    <li className="block text-gray-700 font-bold mb-2">Frederick Kihle</li>
                    <li className="block text-gray-700 font-bold mb-2"><FontAwesomeIcon icon="fa-solid fa-envelope" /> frederick.kihle@gmail.com</li>
                    <li className="block text-gray-700 font-bold mb-2"><FontAwesomeIcon icon="fa-solid fa-phone-volume" /> 95257873</li>
                </ul>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    )
};

export default ContactPage;