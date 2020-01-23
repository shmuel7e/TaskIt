const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getBoard, getBoards, addBoard, updateBoard, updateActivity, addNewTopic, addNewTask } = require('./board.controller')
const router = express.Router()



router.get('/', getBoard)
router.get('/all', getBoards)
router.post('/', addBoard)
router.put('/', updateBoard)
router.put('/topic/:id', addNewTopic)
router.put('/task/:topicId/:boardId', addNewTask)
router.put('/activity/:id', updateActivity)


module.exports = router