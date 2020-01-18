
const dbService = require('../../services/db.service')
const boardUtils = require('./board.utils')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy = {}) {

    const criteria = {};
    let board
    if (Object.entries(filterBy).length === 0) {
        board =boardUtils.createBoard()
    }
    try {
        return Promise.resolve(board)
    } catch (err) {
        console.log('ERROR: cannot find board')
        throw err;
    }
}








module.exports = {
    query
}