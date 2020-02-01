import BoardService from '../services/BoardService.js';
import StorageService from '../services/StorageService.js'
// set boards // 

function _setBoards(boards) {
    return {
        type: 'BOARDS_SET',
        boards
    }
}
// set boards
export function loadBoards(userId) {
    return async dispatch => {
        try {
            const boards = await BoardService.getBoards(userId);

            dispatch(_setBoards(boards));
        } catch (err) {
            console.log('Boards Actions: err in load boards', err);
        }
    };
}
// set board
function _setBoard(board) {
    return {
        type: 'BOARD_SET',
        board
    }
}
export function setCurrBoard(board) {
    return dispatch => {
        try {
            dispatch(_setBoard(board));
           // StorageService.saveToStorage('board',board)
        } catch (err) {
            console.log('UserActions: err in set board', err);
        }
    };
}


// add member
function _addMember(member) {
    return {
        type: 'BOARD_MEMBER_ADD',
        member
    }
}
export function addMemberToBoard(member) {
    return dispatch => {
        try {
            dispatch(_addMember(member));
        } catch (err) {
            console.log('BoardActions: err in add member', err);
        }
    };
}

export function loadBoard() {
    return async dispatch => {
        try {
           let board =StorageService.loadFromStorage('board',null)
           board =(!board)?BoardService.createBoard():board
           StorageService.saveToStorage('board',board)
            dispatch(_setBoard(board));
        } catch (err) {
            console.log('UserActions: err in getBoard', err);
        }
    };
}

export function updateBoard(board) {
    return async dispatch => {
        try {
            dispatch(_setBoard(board));
        } catch (err) {
            console.log('UserActions: err in loadUsers', err);
        }
    };
}

// set current topic //

function _setCurrTopic(topicId) {
    return {
        type: 'CURRENT_TOPIC_SET',
        topicId
    }
}

export function setCurrTopic(topicId) {
    return async dispatch => {
        try {
            dispatch(_setCurrTopic(topicId));
        } catch (err) {
            console.log('UserActions: err in setCurrTopic', err);
        }
    };
}

// updateTopic // 

function _updateTopic(topic) {
    return {
        type: 'TOPIC_UPDATE',
        topic
    }
}

export function updateTopic(topic) {
    return async dispatch => {
        try {
            dispatch(_updateTopic(topic));
        } catch (err) {
            console.log('UserActions: err in updateTopic', err);
        }
    };
}

// updateActivities // 

export function updateActivity(activity, currBoard) {
    return async dispatch => {
        try {
            //TODO
            const board = await BoardService.updateActivity(activity, currBoard);
            dispatch({ type: 'BOARD_SET', board });
        } catch (err) {
            console.log('UserActions: err in updateActivity', err);
        }
    };
}


// updateTask // 

function _updateTask(topic, task) {
    return {
        type: 'TASK_UPDATE',
        topic,
        task
    }
}

export function updateTask(topic, task) {
    return async dispatch => {
        try {
            dispatch(_updateTask(topic, task));
        } catch (err) {
            console.log('UserActions: err in updateTask', err);
        }
    };
}

export function uploadImgToTask(event, topic, task) {
    return async dispatch => {
        try {
           const img=await BoardService.uploadImg(event)
           task.cover=img.url
           dispatch(_updateTask(topic, task));
        } catch (err) {
            console.log('UserActions: err in updateTask', err);
        }
    };
}

export function addTopic(topicName, boardId) {
    return async dispatch => {
        try {
            const board = await BoardService.addTopic(topicName, boardId);
            dispatch(_setBoard(board));
        } catch (err) {
            console.log('UserActions: err in addTopic', err);
        }
    };
}


export function addTask(taskTitle, topicId, boardId) {
    return async dispatch => {
        try {
            const board = await BoardService.addTask(taskTitle, topicId, boardId);
            dispatch(_setBoard(board));
        } catch (err) {
            console.log('UserActions: err in addTask', err);
        }
    };
}

// set current task // 

function _setCurrTask(taskId) {
    return {
        type: 'CURRENT_TASK_SET',
        taskId
    }
}

export function setCurrTask(taskId) {
    return async dispatch => {
        try {
            //TODO
            //const task = await BoardService.getTaskById();
            dispatch(_setCurrTask(taskId));
        } catch (err) {
            console.log('UserActions: err in setCurrTask', err);
        }
    };
}

// background  IMG change // 
function _setBgCover(imgName) {
    return {
        type: 'BOARD_COVER_SET',
        imgName
    }
}
export function setBgCover(imgName) {
    return async dispatch => {
        try {
            const changedImgName = await BoardService.setBgCover(imgName);
            dispatch(_setBgCover(changedImgName));
        } catch (err) {
            console.log('UserActions: err in loadUsers', err);
        }
    };
}



// add task 
function _cloneTask(topicId, updatedTask) {
    return {
        type: 'TASK_CLONE',
        topicId,
        updatedTask,

    }
}
export function cloneTask(topicId, task) {
    return async dispatch => {
        try {
            //TODO
            const updatedTask = await BoardService.cloneTask(task);
            dispatch(_cloneTask(topicId, updatedTask));
        } catch (err) {
            console.log('UserActions: err in cloneTask', err);
        }
    };
}


// deleteTopic
function _deleteTopic(topicId) {
    return {
        type: 'TOPIC_REMOVE',
        topicId
    }
}
export function deleteTopic(topicId) {
    return async dispatch => {
        try {
            dispatch(_deleteTopic(topicId));
        } catch (err) {
            console.log('UserActions: err in deleteTopic', err);
        }
    };
}

// deleteTask
function _deleteTask(taskId) {
    return {
        type: 'TASK_REMOVE',
        taskId
    }
}
export function deleteTask(taskId) {
    return async dispatch => {
        try {
            dispatch(_deleteTask(taskId));
        } catch (err) {
            console.log('UserActions: err in deleteTask', err);
        }
    };
}

// add new checklist

function _addChecklist(topic, task) {
    return {
        type: 'TASK_UPDATE',
        topic,
        task
    }
}

export function addChecklist(topic, task, checkListTitle) {
    return async dispatch => {
        try {
            const updatedTask = await BoardService.addNewChecklist(task, checkListTitle);
            dispatch(_addChecklist(topic,updatedTask));
        } catch (err) {
            console.log('UserActions: err in addTodo', err);
        }
    };
}


// add new activity comment

function _addActivityComment(topic, task,activityComment) {
    return {
        type: 'TASK_ACTIVITY_ADD',
        topic,
        task,
        activityComment
    }
}

export function addActivityComment(topic, task, activityComment) {
    return async dispatch => {
        try {
            dispatch(_addActivityComment(topic,task,activityComment));
        } catch (err) {
            console.log('UserActions: err in addTodo', err);
        }
    };
}

// add new todo

function _addTodo(topic, task) {
    return {
        type: 'TASK_UPDATE',
        topic,
        task
    }
}

export function addTodo(topic, task, checkList, todoTitle) {
    return async dispatch => {
        try {
            const updatedTask = await BoardService.addNewTodo(checkList,task, todoTitle);
            dispatch(_addTodo(topic,updatedTask));
        } catch (err) {
            console.log('UserActions: err in addTodo', err);
        }
    };
}


// sort  Task
function _sortTasks(droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    typeToDrop) {
    return {
        type: 'TASK_HAPPEND',
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        typeToDrop
    }
}
export function sortTasks(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type) {
    const typeToDrop = type
    return async dispatch => {
        try {
            dispatch(_sortTasks(droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                typeToDrop));
        } catch (err) {
            console.log('UserActions: err in deleteTask', err);
        }
    };
}







