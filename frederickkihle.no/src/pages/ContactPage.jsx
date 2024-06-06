import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import ContactForm from "../components/ContactForm";
library.add(fas)

const ContactPage = () => {
    return (
        <div className="flex-col content-center px-4 py-2">
            <div className="my-4 max-w-lg mx-auto p-4 border-x rounded-md shadow-md font-bold text-center text-white">
                Contact Form
            </div>
            <div className="mb-4">
                <ContactForm />
            </div>
        </div>
    )
};

export default ContactPage;