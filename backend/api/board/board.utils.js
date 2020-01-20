const utilsService = require('../../services/utils.service')
function createBoard() {
    const board = {
        members: [{ email: 'shmuel7e@gmail.com', username: 'shmuel' }, { email: 'puku@gmail.com', username: 'tal' }],
        cover: 'bg5.jpg',
        topics: [{
            id: utilsService.makeRandomId(),
            title: 'todo',
            tasks: [{
                id: utilsService.makeRandomId(),
                title: 'going to supermarket',
                cover: '',
                description: 'buy fruits and wines',
                createdAt: new Date,
                comments: [],
                details: [],
                members: ['tal', 'shmuel', 'gilad'],
                labels: [],
                checkList: [],
                dueDate: '',
                attachments: []
            }]
        }, {
            id: utilsService.makeRandomId(),
            title: 'things to do',
            tasks: [
                {
                    id: utilsService.makeRandomId(),
                    title: 'make homework',
                    cover: '',
                    description: 'learn math',
                    createdAt: new Date,
                    comments: [],
                    details: [],
                    members: ['tal'],
                    labels: [],
                    checkList: [],
                    dueDate: '',
                    attachments: []
                }
            ]
        },
        {
            id: utilsService.makeRandomId(),
            title: 'done',
            tasks: [
                {
                    id: utilsService.makeRandomId(),
                    title: 'go to shopping',
                    cover: '',
                    description: 'buy t-shirt',
                    createdAt: new Date,
                    comments: [],
                    details: [],
                    members: ['ahbal', 'tambal'],
                    labels: [],
                    checkList: [],
                    dueDate: '',
                    attachments: []
                }
            ]
        }
        ]
    }
    return board
}

module.exports = {
    createBoard
}