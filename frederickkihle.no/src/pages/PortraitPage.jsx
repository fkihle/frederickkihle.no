import React from "react";
import Thumbnails from '../components/Thumbnails';

// Dynamically import all images from a directory
function importAll(r) {
    return r.keys().map(r);
}

// Import all images from /images/commercial
const images = importAll(require.context('../images/portraits', false, /\.(png|jpe?g)$/));

const PortraitPage = () => {
    return (
        <div class="columns-2 md:columns-3 lg:columns-4">
            <Thumbnails images={images} />
        </div>
    )
};

export default PortraitPage;