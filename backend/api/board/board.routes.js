const express = require('express')
const {requireAuth} = require('../../middlewares/requireAuth.middleware')
const {getBoard,getBoards,addBoard,updateBoard} = require('./board.controller')
const router = express.Router()



router.get('/', getBoard)
router.get('/all', getBoards)
router.post('/', addBoard)
router.put('/', updateBoard)


module.exports = router