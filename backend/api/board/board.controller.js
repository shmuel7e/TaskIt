const logger = require('../../services/logger.service')
const boardService = require('./board.service')


async function getBoard(req, res) {
    try {
        const board = await boardService.query(req.query)
        res.send(board)
    } catch (err) {
        logger.error('Cannot get board', err);
        res.status(500).send({ error: 'cannot get Board' })
        
    }
}



module.exports = {
    getBoard
}