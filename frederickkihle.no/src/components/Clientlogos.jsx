import React from "react";

const Clientlogos = ({ images }) => {
    return (
        <div className="flex-col content-center px-4 py-2 mt-16">
            <div className="text-white text-center text-4xl">
                Client list
            </div>
            <div className="p-6 grid grid-cols-3 md:grid-cols-6 xl:grid-cols-12 gap-4">

                {images.map((src, index) => (

                    <div key={index} className="">

                        <img src={src} alt={`Clientlogo ${index}`} className="w-full h-auto object-cover rounded-xl" />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clientlogos;