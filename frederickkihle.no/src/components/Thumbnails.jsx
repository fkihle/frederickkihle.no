import React from "react";

const Thumbnails = ({ images }) => {
    return (
        <div className="">
                {images.map((src, index) => (
                    <span key={index}>
                        <img src={src} alt={`Thumbnail ${index}`} className="rounded-md py-2" />
                    </span>
                ))}
        </div>
    );
};

export default Thumbnails;