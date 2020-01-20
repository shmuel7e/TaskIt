import BoardService from '../services/BoardService.js';

// set board // 

function _setBoard(board) {
    return {
        type: 'BOARD_SET',
        board
    }
}

export function loadBoard() {
    return async dispatch => {
        try {
            // // example for loading
            // dispatch(loading());
            const board = await BoardService.query();
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
function _addTask(newTask,topicId) {
    return {
        type: 'TASK_ADD',
        newTask,
        topicId
    }
}
export function addTask(taskTitle,topicId) {
    return async dispatch => {
        try {
            const newTask = await BoardService.addTask(taskTitle);
            dispatch(_addTask(newTask,topicId));
        } catch (err) {
            console.log('UserActions: err in addTask', err);
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

// id: "12jYwUb4Wv"
// title: "make homework"
// cover: ""
// description: "learn math"
// createdAt: "2020-01-18T19:00:10.208Z"




