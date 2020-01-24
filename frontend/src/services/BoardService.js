import UtilsService from './UtilsService.js'
import HttpService from './HttpService';

async function getBoard(boardId) {
    return await HttpService.get('board/'+boardId)
}
async function getBoards(userId) {
    return await HttpService.get(`board/all/${userId}`)
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


async function addNewTodo(checkList,task, todoTitle) {
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
        isDone:false
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
    updateActivity,
    addNewTodo,
    addNewChecklist
};
