import UtilsService from './UtilsService.js'
import HttpService from './HttpService';

async function getBoard() {
    return await HttpService.get('board')
}
async function getBoards(userId) {
    return await HttpService.get(`board/all?id=${userId}`)
}

async function addBoard(user) {
    return await HttpService.post('board', user)
}
async function updateBoard(board) {
    console.log('im the board', board)
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


function _createTask(taskTitle) {
    return {
        // id: UtilsService.makeRandomId(),
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

function _createTopic(topicTitle) {
    return {
        title: topicTitle,
        tasks: []
    }
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
    updateActivity
};
