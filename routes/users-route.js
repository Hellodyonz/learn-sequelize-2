const express = require('express')
const { createUser, getAllUser, getUserById } = require('../controllers/users-controller')
const route = express.Router()

route.post('/', createUser)
route.get('/', getAllUser)
route.get('/:id', getUserById)

module.exports = route