import UtilsService from './UtilsService.js'
import HttpService from './HttpService';

async function getBoard() {
    return await HttpService.get('board')
}
async function getBoards(userId) {
    return await HttpService.get(`board/all?id=${userId}`)
}

async function addBoard(user){
    return await HttpService.post('board',user)
}
async function updateBoard(board){
    return await HttpService.put('board',board)
}

async function setBgCover(imgName) {
    return Promise.resolve(imgName);
}

async function cloneTask (task) {
    let clonedTask = JSON.parse(JSON.stringify(task));
    clonedTask.id = UtilsService.makeRandomId();
    return Promise.resolve(clonedTask);
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


async function addNewTodo(checkList,task, todoTitle) {
    const newTodo = _createTodo(todoTitle)
    checkList.todos.push(newTodo);
    let updatedCheckLists = task.checkLists.map(currCheckList =>
        currCheckList.id === checkList.id ? checkList : currCheckList)
    task.checkLists = updatedCheckLists  
    return Promise.resolve({ ...task })
}

function _createTodo(todoTitle) {
    return {
        id: UtilsService.makeRandomId(),
        title: todoTitle,
        isDone:false
    }
}

async function addNewChecklist(task, checkListTitle) {
    const newCheckList = _createCheckList(checkListTitle)
    task.checkLists.push(newCheckList);
    return Promise.resolve({ ...task })
}

function _createCheckList(checkListTitle) {
    return {
        id: UtilsService.makeRandomId(),
        title: checkListTitle,
        todos:[]
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
    addNewTodo,
    addNewChecklist
};
