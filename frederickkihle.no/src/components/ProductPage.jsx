import React from "react";
import Thumbnails from './Thumbnails';

// Dynamically import all images from a directory
function importAll(r) {
    return r.keys().map(r);
}

// Import all images from /images/commercial
const images = importAll(require.context('../images/products', false, /\.(png|jpe?g)$/));

const ProductPage = () => {
    return (
        <Thumbnails images={images} />
    )
};

export default ProductPage;