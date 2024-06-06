import React from "react";
import Clientlogos from '../components/Clientlogos';
import Thumbnails from '../components/Thumbnails';

// Dynamically import all images from a directory
function importAll(r) {
    return r.keys().map(r);
}

// Import all images from /images/commercial
const images = importAll(require.context('../images/commercial', false, /\.(png|jpe?g)$/));

// Import all images from /images/commercial
const logos = importAll(require.context('../logos', false, /\.(png|jpe?g)$/));

const CommercialPage = () => {
    return (
        <>
            <div className="my-4 max-w-lg mx-auto p-4 border-x rounded-md shadow-md font-bold text-center text-white">
                Commercial work
            </div>
            <div class="columns-2 md:columns-3 lg:columns-4">
                <Thumbnails images={images} />
            </div>
            <div className="">
                <Clientlogos images={logos} />
            </div>
            
        </>
    )
};

export default CommercialPage;