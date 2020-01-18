// import UtilsService from './UtilsService.js'
import HttpService from './HttpService';

async function query() {
    return await HttpService.get('board')
}

async function setBgCover(imgName) {
    return Promise.resolve(imgName);
}


export default {
    query,
    setBgCover,
};
