const logger = require('../../services/logger.service')
const boardService = require('./board.service')
const utilsService = require('../../services/utils.service')

async function getBoard(req, res) {
    const boardId = req.query.id
    try {
        const board = await boardService.getBoard(boardId)
        res.send(board)
    } catch (err) {
        logger.error('Cannot get board', err);
        res.status(500).send({ error: 'cannot get Board' })
    }
}
async function getBoards(req, res) {
    const userId = req.query.id
    try {
        const board = await boardService.getBoards(userId)
        res.send(board)
    } catch (err) {
        logger.error('Cannot get board', err);
        res.status(500).send({ error: 'cannot get Board' })
    }
}
async function addBoard(req, res) {
    const user = req.body
    try {
        const board = await boardService.addBoard(user)
        res.send(board)
    } catch (err) {
        logger.error('Cannot post board', err);
        res.status(500).send({ error: 'cannot post Board' })
    }
}
async function updateBoard(req, res) {
    let board = req.body
    try {
        board = await boardService.updateBoard(board)
        res.send(board)
    } catch (err) {
        logger.error('Cannot update board', err);
        res.status(500).send({ error: 'cannot update Board' })
    }
}

async function updateActivity(req, res) {
    const boardToUpdate = await boardService.getBoard(req.params.id);
    boardToUpdate.activities.push(req.body);
    try {
        const updatedBoard = await boardService.updateBoard(boardToUpdate)
        res.send(updatedBoard)
    } catch (err) {
        logger.error('Cannot update board', err);
        res.status(500).send({ error: 'cannot update Board' })
    }
}

async function addNewTopic(req, res) {
    const boardToUpdate = await boardService.getBoard(req.params.id);
    const topicToAdd = req.body;
    topicToAdd.id = utilsService.makeRandomId();
    boardToUpdate.topics.push(topicToAdd);
    try {
        const updatedBoard = await boardService.updateBoard(boardToUpdate)
        res.send(updatedBoard)
    } catch (err) {
        logger.error('Cannot update board', err);
        res.status(500).send({ error: 'cannot update Board' })
    }
}


async function addNewTask(req, res) {
    const boardToUpdate = await boardService.getBoard(req.params.boardId);
    const topicToUpdate = boardToUpdate.topics.find(topic => topic.id === req.params.topicId)
    const taskToAdd = req.body;
    taskToAdd.id = utilsService.makeRandomId();
    topicToUpdate.tasks.push(taskToAdd);
    try {
        const updatedBoard = await boardService.updateBoard({...boardToUpdate})
        res.send(updatedBoard)
    } catch (err) {
        logger.error('Cannot update board', err);
        res.status(500).send({ error: 'cannot update Board' })
    }
}


module.exports = {
    getBoard,
    addBoard,
    getBoards,
    updateBoard,
    updateActivity,
    addNewTopic,
    addNewTask
}