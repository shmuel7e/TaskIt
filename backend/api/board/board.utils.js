const utilsService = require('../../services/utils.service')
function createBoard() {
    const board = {
        user: { userName: 'Guest' },
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
                members: [],
                labels: [],
                checkList: [],
                dueDate: '',
                attachments: []
            }]
        },{
            id: utilsService.makeRandomId(),
            title: 'doing',
            tasks:[
                {
                    id: utilsService.makeRandomId(),
                    title: 'make homework',
                    cover: '',
                    description: 'learn math',
                    createdAt: new Date,
                    comments: [],
                    details: [],
                    members: [],
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
            tasks:[
                {
                    id: utilsService.makeRandomId(),
                    title: 'go to shopping',
                    cover: '',
                    description: 'buy t-shirt',
                    createdAt: new Date,
                    comments: [],
                    details: [],
                    members: [],
                    labels: [],
                    checkList: [],
                    dueDate: '',
                    attachments: []
                }
            ]
        }
    ]}
    return board
}

module.exports = {
    createBoard
}