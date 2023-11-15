const express = require('express')
const { createTodo, getAllTodo, getTodoById } = require('../controllers/todo-controller')
const route = express.Router()

route.post('/', createTodo)
route.get('/', getAllTodo)
route.get('/:id', getTodoById)

module.exports = route