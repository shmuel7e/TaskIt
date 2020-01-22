const logger = require('../../services/logger.service')
const boardService = require('./board.service')


async function getBoard(req, res) {
    const boardId=req.query.id
    try {
        const board = await boardService.getBoard(boardId)
        res.send(board)
    } catch (err) {
        logger.error('Cannot get board', err);
        res.status(500).send({ error: 'cannot get Board' })
    }
}
async function getBoards(req, res) {
    const userId=req.query.id
    try {
        const board = await boardService.getBoards(userId)
        res.send(board)
    } catch (err) {
        logger.error('Cannot get board', err);
        res.status(500).send({ error: 'cannot get Board' })
    }
}
 async function addBoard(req, res) {
     const user=req.body
     try {
         const board = await boardService.addBoard(user)
         res.send(board)
     } catch (err) {
         logger.error('Cannot post board', err);
         res.status(500).send({ error: 'cannot post Board' })
     }
}
async function updateBoard(req, res) {
    let board=req.body
    try {
         board = await boardService.updateBoard(board)
        res.send(board)
    } catch (err) {
        logger.error('Cannot update board', err);
        res.status(500).send({ error: 'cannot update Board' })
    }
}




module.exports = {
    getBoard,
    addBoard,
    getBoards,
    updateBoard
}