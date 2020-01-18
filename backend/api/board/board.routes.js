const express = require('express')
const {requireAuth} = require('../../middlewares/requireAuth.middleware')
const {getBoard} = require('./board.controller')
const router = express.Router()



router.get('/', getBoard)


module.exports = router