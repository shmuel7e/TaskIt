import UtilsService from './UtilsService.js'
import HttpService from './HttpService';

async function getBoard(boardId) {
    return await HttpService.get('board/' + boardId)
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
    console.log(ev.target.files[0])
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', PRESET_NAME);

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => {
          //  console.log(res)
            return res
        })
        .catch(err => console.error(err))
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
    uploadImg
};
