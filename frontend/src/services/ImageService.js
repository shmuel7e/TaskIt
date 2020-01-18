import gallery from '../data/ImageGallery.js';
import colorGallery from '../data/ColorGallery.js';

function getGalleryImages() {
    return Promise.resolve(gallery);
}

function getGalleryColors() {
    return Promise.resolve(colorGallery);
}

export default {
    getGalleryImages,
    getGalleryColors
}