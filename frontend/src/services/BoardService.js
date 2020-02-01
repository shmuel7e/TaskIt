import UtilsService from './UtilsService.js'
import HttpService from './HttpService';

async function getBoard(boardId) {
    return await HttpService.get('board/' + boardId)
}
async function getBoards(userId) {
    return await HttpService.get(`board/all/${userId}`)
}
async function deleteBoard(boardId){
    return await HttpService.delete(`board/${boardId}`) 
}


async function addBoard(user) {
    return await HttpService.post('board', user)
}
async function updateBoard(board) {
    return await HttpService.put('board', board)
}


async function setBgCover(imgName) {
    return Promise.resolve(imgName);
}

async function updateActivity(activity, currBoard) {
    return await HttpService.put(`board/activity/${currBoard._id}`, activity)
}

async function cloneTask(task) {
    let clonedTask = JSON.parse(JSON.stringify(task));
    clonedTask.id = UtilsService.makeRandomId();
    return Promise.resolve(clonedTask);
}

 async function removeUserFromBoard(board,user){
  board.members=  board.members.filter(member => member._id !==user._id)
 return await updateBoard(board)
   
}

function _createTask(taskTitle) {
    return {
        title: taskTitle,
        cover: '',
        description: '',
        createdAt: new Date(),
        comments: [],
        details: [],
        members: [],
        labels: [],
        checkList: [],
        dueTime: '',
        attachments: []
    }
}

async function addTopic(topicTitle, currBoardId) {
    const newTopic = _createTopic(topicTitle)
    return await HttpService.put(`board/topic/${currBoardId}`, newTopic)
}

async function addTask(taskTitle, topicId, currBoardId) {
    const newTask = _createTask(taskTitle)
    return await HttpService.put(`board/task/${topicId}/${currBoardId}`, newTask)
}

async function updateTask(taskToUpdate,boardId, topicId) {
   return await HttpService.put(`board/updatetask/${boardId}/${topicId}/${taskToUpdate.id}`, taskToUpdate)
}

function _createTopic(topicTitle) {
    return {
        title: topicTitle,
        tasks: []
    }
}


async function addNewTodo(checkList, task, todoTitle) {
    const newTodo = _createTodo(todoTitle)
    checkList.todos.push(newTodo);
    let updatedCheckLists = task.checkList.map(currCheckList =>
        currCheckList.id === checkList.id ? checkList : currCheckList)
    task.checkList = updatedCheckLists
    return Promise.resolve({ ...task })
}

function _createTodo(todoTitle) {
    return {
        id: UtilsService.makeRandomId(),
        title: todoTitle,
        isDone: false
    }
}

async function addNewChecklist(task, checkListTitle) {
    const newCheckList = _createCheckList(checkListTitle)
    task.checkList.push(newCheckList);
    return Promise.resolve({ ...task })
}

function _createCheckList(checkListTitle) {
    return {
        id: UtilsService.makeRandomId(),
        title: checkListTitle,
        todos: []
    }
}
 function uploadImg(ev) {
    const CLOUD_NAME = 'durhjyd6g'
    const PRESET_NAME = 'ujx7rqlu'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const formData = new FormData();
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', PRESET_NAME);
    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
        .catch(err => console.error(err))
}

function createBoard() {
    const board = {
        _id:UtilsService.makeRandomId(),    
        members: [{ _id: UtilsService.makeRandomId(), email: 'shmuel7e@gmail.com', username: 'shmuel elkis', bgColor: '#FFDFD3' },
        { _id: UtilsService.makeRandomId(), email: 'puku@gmail.com', username: 'tal mashiah', bgColor: '#FEC8D8' },
        { _id: UtilsService.makeRandomId(), email: 'tira@gmail.com', username: 'Tira malka', bgColor: '#957DAD' },
        { _id: UtilsService.makeRandomId(), email: 'chuchu@gmail.com', username: 'chuchi buchi', bgColor: '#D291BC' },
        { _id: UtilsService.makeRandomId(), email: 'dudu@gmail.com', username: 'dudu aatok', bgColor: '#E0BBE4' }],
        cover: 'bg5.jpg',
        activities: [{ activityName: 'shmuel deleted task', createdAt: '12:58 PM' },
        { activityName: 'shmuel added a task', createdAt: '17:40 PM' },
        { activityName: 'shmuel removed tal from the board', createdAt: '19:00 PM' }],
        topics: [{
            id: UtilsService.makeRandomId(),
            title: 'Todo',
            tasks: [{
                id: UtilsService.makeRandomId(),
                title: 'going to supermarket',
                cover: '',
                description: 'buy fruits and wines',
                createdAt: new Date,
                checkList: [{ id: UtilsService.makeRandomId(), title: 'Check List yoyo', todos: [{ id: UtilsService.makeRandomId(), title: 'buy soya milk', isDone: false }, { id: UtilsService.makeRandomId(), title: 'go to the gym', isDone: true }] }],
                comments: [],
                details: [],
                members: [],
                labels: [],
                dueTime: '',
                attachments: [],
                bgColor: '',
            }]
        }, {
            id: UtilsService.makeRandomId(),
            title: 'Things To Do',
            tasks: [
                {
                    id: UtilsService.makeRandomId(),
                    title: 'make homework',
                    cover: '',
                    description: 'learn math',
                    createdAt: new Date,
                    comments: [],
                    details: [],
                    members: [],
                    labels: [],
                    dueTime: '',
                    attachments: [],
                    checkList:[],
                    bgColor: '',
                }
            ]
        },
        {
            id: UtilsService.makeRandomId(),
            title: 'Done',
            tasks: [
                {
                    id: UtilsService.makeRandomId(),
                    title: 'go to shopping',
                    cover: '',
                    description: 'buy t-shirt',
                    createdAt: new Date,
                    comments: [],
                    details: [],
                    members: [],
                    labels: [],
                    dueTime: '',
                    checkList:[],
                    attachments: [],
                    bgColor: '',
                }
            ]
        }
        ]
    }
    return board
}


export default {
    getBoard,
    setBgCover,
    addTask,
    addTopic,
    cloneTask,
    addBoard,
    getBoards,
    updateBoard,
    updateActivity,
    addNewTodo,
    addNewChecklist,
    updateTask,
    uploadImg,
    deleteBoard,
    removeUserFromBoard,
    createBoard
};
