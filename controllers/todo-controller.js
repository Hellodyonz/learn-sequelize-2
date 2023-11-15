const Users = require('../models/Users')
const Todos = require('../models/Todos')
const bcrypt = require('bcrypt');

module.exports = {
    createTodo: async(req,res)=>{
        let data = req.body
        try{
            await Todos.create(data)

            res.json({
                message: 'berhasil menambah data',
                data
            })

        } catch {
            res.json({
                message: 'gagal menambah data'
            })
        }


        },
    getAllTodo:async(req,res)=>{
        const todos = await Todos.findAll({include: Users}); // asosiasi

            res.json({
                todos
            })
        },
    getTodoById: async(req,res)=>{
        let itemId = req.params.id

        try{
            const todo = await Todos.findByPk(itemId, {
                attributes: ['id', 'value'],
            });

            res.json({
                todo
            })

        }catch(error){
            res.json({
                message: 'Gagal mendapatkan data',
                error
            })
        }
    }
}