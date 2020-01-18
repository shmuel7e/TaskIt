import gallery from '../services/ImageGallery.js';

function getGalleryImages() {
    return Promise.resolve(gallery);
}

export default {
    getGalleryImages,
}