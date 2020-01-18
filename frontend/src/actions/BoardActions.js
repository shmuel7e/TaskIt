import BoardService from '../services/BoardService.js';

// load board json // 
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

// add task // 
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
            console.log(newTask)
            dispatch(_addTask(newTask,topicId));
        } catch (err) {
            console.log('UserActions: err in addTask', err);
        }
    };
}

// id: "12jYwUb4Wv"
// title: "make homework"
// cover: ""
// description: "learn math"
// createdAt: "2020-01-18T19:00:10.208Z"




