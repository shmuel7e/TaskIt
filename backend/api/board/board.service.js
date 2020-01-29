
const dbService = require('../../services/db.service')
const boardUtils = require('./board.utils')
const ObjectId = require('mongodb').ObjectId

async function getBoard(boardId) {
    let board
    try {
        const collection = await dbService.getCollection('board')
        board = await collection.findOne({ _id: ObjectId(boardId) })
        return board
    } catch (err) {
        console.log('ERROR: cannot find board')
        throw err;
    }
}

async function getBoards(userId) {
    let board
    try {
        const collection = await dbService.getCollection('board')
        board = await collection.find({ members: { $elemMatch: { _id:userId } } }).toArray()
        return board
    } catch (err) {
        console.log('ERROR: cannot find board')
        throw err;
    }
}

async function removeBoard(boardId) {
    const collection = await dbService.getCollection('board')
    try {
        return await collection.deleteOne({"_id":ObjectId(boardId)})
    } catch (err) {
        console.log(`ERROR: cannot remove board ${boardId}`)
        throw err;
    }
}

async function addBoard(user) {
    try {
        const board = boardUtils.createBoard(user)
        const collection = await dbService.getCollection('board')
        await collection.insertOne(board);
        return board;
    } catch (err) {
        console.log(`ERROR: cannot insert board`)
        throw err;
    }
}

async function updateBoard(board) {
    const collection = await dbService.getCollection('board')
    let id = board._id
    delete board._id
    try {
        await collection.replaceOne({ "_id": ObjectId(id) }, { $set: { ...board } })
        board._id = id
        return board
    } catch (err) {
        console.log(`ERROR: cannot update board`)
        throw err;
    }
}


module.exports = {
    getBoard,
    addBoard,
    getBoards,
    updateBoard,
    removeBoard
}