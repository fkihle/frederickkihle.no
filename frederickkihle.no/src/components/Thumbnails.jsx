import React from "react";

const Thumbnails = ({ images }) => {
    return (
        <div className="flex-col content-center px-4 py-2 mt-16">
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="relative group">
                        <img src={src} alt={`Thumbnail ${index}`} className="w-full h-auto object-cover rounded-md" />
                        <div className="absolute inset-0 bg-gray-900 rounded-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white">Thumbnail {index + 1}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Thumbnails;