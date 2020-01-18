import BoardService from '../services/BoardService.js';


export function loadBoard() {
    return async dispatch => {
        try {
            // // example for loading
            // dispatch(loading());
            const board = await BoardService.query();
            dispatch(setBoard(board));
        } catch (err) {
            console.log('UserActions: err in loadUsers', err);
        }
    };
}

function setBoard (board) {
    return {
        type: 'BOARD_SET',
        board
    }
}