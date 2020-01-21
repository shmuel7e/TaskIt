import UtilsService from './UtilsService.js'
import HttpService from './HttpService';

async function query() {
    return await HttpService.get('board')
}

async function setBgCover(imgName) {
    return Promise.resolve(imgName);
}
async function addTask(taskTitle) {
    const newTask = _createTask(taskTitle)
    return Promise.resolve({ ...newTask })
}

function _createTask(taskTitle) {
    return {
        id: UtilsService.makeRandomId(),
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

async function addTopic(topicTitle) {
    const newTopic = _createTopic(topicTitle)
    return Promise.resolve({ ...newTopic })
}

function _createTopic(topicTitle) {
    return {
        id: UtilsService.makeRandomId(),
        title: topicTitle,
        tasks:[]
    }
}


export default {
    query,
    setBgCover,
    addTask,
    addTopic
};
