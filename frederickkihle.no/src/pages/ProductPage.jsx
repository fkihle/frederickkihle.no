import React from "react";
import Thumbnails from '../components/Thumbnails';

// Dynamically import all images from a directory
function importAll(r) {
    return r.keys().map(r);
}

// Import all images from /images/products
const images = importAll(require.context('../images/products/thmbs', false, /\.(png|jpe?g)$/));

const ProductPage = () => {
    return (
        <>
            <div className="my-4 max-w-lg mx-auto p-4 border-x rounded-md shadow-md font-bold text-center text-white">
                    Product work
            </div>
            <div class="columns-2 md:columns-3 lg:columns-4">
                <Thumbnails images={images} />
            </div>

        </>
    )
};

export default ProductPage;