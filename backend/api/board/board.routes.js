const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getBoard,
    getBoards,
    addBoard,
    updateBoard,
    updateActivity,
    addNewTopic,
    addNewTask,
    updateTask,
    deleteBoard } = require('./board.controller')
const router = express.Router()



router.get('/:id', getBoard)
router.get('/all/:id', getBoards)
router.post('/', addBoard)
router.delete('/:id', deleteBoard)
router.put('/', updateBoard)
router.put('/topic/:id', addNewTopic)
router.put('/task/:topicId/:boardId', addNewTask)
router.put('/updatetask/:boardId/:topicId/:taskId', updateTask)
router.put('/activity/:id', updateActivity)


module.exports = router