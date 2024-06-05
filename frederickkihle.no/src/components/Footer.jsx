import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
        <div className="fixed bottom-0 right-0 font-coldiacItalic [writing-mode:vertical-lr] opacity-75">
            <Link to='/contact'>
                <div className=" bg-neutral-900 text-gray-400 p-2 mb-4 rounded-l-md flex items-center space-x-2">
                    Contact
                </div>
            </Link>
        </div>
        </>
    )
};