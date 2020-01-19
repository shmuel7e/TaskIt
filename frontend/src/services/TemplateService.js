import templateGallery from '../data/TemplateGallery.js';

function getGalleryTemplates() {
    return Promise.resolve(templateGallery);
}

export default {
    getGalleryTemplates,
}