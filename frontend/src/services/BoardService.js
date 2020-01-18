import UtilsService from './UtilsService.js'

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


function query() {
    return Promise.resolve({...gBoard})
}

export default {
    query
};
