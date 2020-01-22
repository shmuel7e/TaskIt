import BoardService from '../services/BoardService.js';

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
    console.log(board)
    return  dispatch => {
        try {
            dispatch(_setBoard(board));
        } catch (err) {
            console.log('UserActions: err in set board', err);
        }
    };
}

export function loadBoard() {
    return async dispatch => {
        try {
            const board = await BoardService.getBoard();
            dispatch(_setBoard(board));
        } catch (err) {
            console.log('UserActions: err in getBoard', err);
        }
    };
}

export function updateBoard(board) {
    return async dispatch => {
        try {
            // // example for loading
            // dispatch(loading());
            // const board = await BoardService.query();
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
            //TODO
            //const topic = await BoardService.getTopicById();
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
            //TODO
            //const topic = await BoardService.updateTopic();
            dispatch(_updateTopic(topic));
        } catch (err) {
            console.log('UserActions: err in updateTopic', err);
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
            //TODO
            //const topic = await BoardService.updateTopic();
            dispatch(_updateTask(topic, task));
        } catch (err) {
            console.log('UserActions: err in updateTask', err);
        }
    };
}

// add new topic
function _addTopic(newTopic) {
    return {
        type: 'TOPIC_ADD',
        newTopic
    }
}
export function addTopic(topicName) {
    return async dispatch => {
        try {
            const newTopic = await BoardService.addTopic(topicName);
            dispatch(_addTopic(newTopic));
        } catch (err) {
            console.log('UserActions: err in addTopic', err);
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
function _addTask(newTask, topicId) {
    return {
        type: 'TASK_ADD',
        newTask,
        topicId
    }
}
export function addTask(taskTitle, topicId) {
    return async dispatch => {
        try {
            const newTask = await BoardService.addTask(taskTitle);
            dispatch(_addTask(newTask, topicId));
        } catch (err) {
            console.log('UserActions: err in addTask', err);
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
            // TODO handle service and backend
            //const deleteTopic = await BoardService.deleteTopic(topicId);
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
            // TODO handle service and backend
            //const deleteTask = await BoardService.deleteTask(taskId);
            dispatch(_deleteTask(taskId));
        } catch (err) {
            console.log('UserActions: err in deleteTask', err);
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
            // TODO handle service and backend
            //const deleteTask = await BoardService.deleteTask(taskId);
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





