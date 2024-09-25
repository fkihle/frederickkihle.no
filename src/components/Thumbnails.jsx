import React from "react";
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ src, alt }) => {
    const { ref, inView } = useInView({
        // Load the image only once
        triggerOnce: true,
        // Trigger when 10% of image is in view
        threshold: 0.1,
    });

    return (
        <div ref={ref} className="w-full h-auto mb-4">
            {inView && <img src={src} alt={alt} className="w-full h-auto object-cover" />}
        </div>
    );
};

const Thumbnails = ({ images }) => {
    return (
        <div className="">
                {images.map((image, index) => (
                    <LazyImage key={index} src={image} alt={`Thumbnail ${index + 1}`} />
                    // <span key={index}>
                    //     <img src={src} alt={`Thumbnail ${index}`} className="rounded-md py-2" />
                    // </span>
                ))}
        </div>
    );
};

export default Thumbnails;