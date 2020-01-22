const utilsService = require('../../services/utils.service')


function createBoard(user) {
    const board = {
        title:"new board",
        members: [user],
        cover: 'bg5.jpg',
        topics: [{
            id: utilsService.makeRandomId(),
            title: 'Todo',
            tasks: []
        }, {
            id: utilsService.makeRandomId(),
            title: 'Things To Do',
            tasks: []
        },
        {
            id: utilsService.makeRandomId(),
            title: 'Done',
            tasks: []
        }
        ]
    }
    return board
}
function createBoardWithDemyData() {
    const board = {
        members: [{ _id: utilsService.makeRandomId(), email: 'shmuel7e@gmail.com', username: 'shmuel elkis', bgColor: '#FFDFD3' },
        { _id: utilsService.makeRandomId(), email: 'puku@gmail.com', username: 'tal mashiah', bgColor: '#FEC8D8' },
        { _id: utilsService.makeRandomId(), email: 'tira@gmail.com', username: 'Tira malka', bgColor: '#957DAD' },
        { _id: utilsService.makeRandomId(), email: 'chuchu@gmail.com', username: 'chuchi buchi', bgColor: '#D291BC' },
        { _id: utilsService.makeRandomId(), email: 'dudu@gmail.com', username: 'dudu aatok', bgColor: '#E0BBE4' }],
        cover: 'bg5.jpg',
        topics: [{
            id: utilsService.makeRandomId(),
            title: 'Todo',
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
        }, {
            id: utilsService.makeRandomId(),
            title: 'Things To Do',
            tasks: [
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
            title: 'Done',
            tasks: [
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
        ]
    }
    return board
}

module.exports = {
    createBoardWithDemyData,
    createBoard
}