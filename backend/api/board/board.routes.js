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



router.get('/:id',requireAuth, getBoard)
router.get('/all/:id',requireAuth, getBoards)
router.post('/',requireAuth, addBoard)
router.delete('/:id',requireAuth, deleteBoard)
router.put('/',requireAuth, updateBoard)
router.put('/topic/:id',requireAuth, addNewTopic)
router.put('/task/:topicId/:boardId',requireAuth, addNewTask)
router.put('/updatetask/:boardId/:topicId/:taskId',requireAuth, updateTask)
router.put('/activity/:id',requireAuth, updateActivity)


module.exports = router