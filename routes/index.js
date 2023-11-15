const express = require('express')
const route = express.Router()
const userRoute = require('./users-route')
const todoRoute = require('./todo-route')

// route.use('/',(req,res)=>{
//     res.json({
//         message: 'berhasil access route'
//     })
// })

route.use('/users', userRoute)
route.use('/todos', todoRoute)

module.exports = route