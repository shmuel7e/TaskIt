import UtilsService from './UtilsService.js'
import HttpService from './HttpService';
let gBoard = {
    _id: UtilsService.makeRandomId(),
    members: ['tal', 'shmuel,gilad'],
    topics: [{
        id: UtilsService.makeRandomId(),
        title: 'Things to do',
        tasks: [{ title: 'blabla' }, { title: 'hello' }, { title: 'blabla' }]
    },
    {
        id: UtilsService.makeRandomId(),
        title: 'Doing',
        tasks: [{ title: 'blabasdasdasla' }, { title: 'hello' }, { title: 'blabla' }]
    },
    {
        id: UtilsService.makeRandomId(),
        title: 'Done',
        tasks: [{ title: 'blabla' }, { title: 'helasdadlo' }, { title: 'blablasdasda' }]
    }]

};


async function query() {
 return await  HttpService.get('board')
  
}



export default {
    query
};
