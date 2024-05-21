import React from "react";
import Thumbnails from './Thumbnails';

// Dynamically import all images from a directory
function importAll(r) {
    return r.keys().map(r);
}

// Import all images from /images/commercial
const images = importAll(require.context('../images/commercial', false, /\.(png|jpe?g)$/));

const CommercialPage = () => {
    return (
        <Thumbnails images={images} />
    )
};

export default CommercialPage;