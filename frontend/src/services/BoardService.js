import UtilsService from './UtilsService.js'
import HttpService from './HttpService';

async function query() {
 return await  HttpService.get('board')
  
}

export default {
    query
};
