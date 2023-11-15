const Users = require('../models/Users')
const bcrypt = require('bcrypt');
const Todo = require('../models/Todos')

module.exports = {
    createUser: async(req,res)=>{
        let data = req.body
        try{
            const hash = bcrypt.hashSync(data.password, 10);
            data.password = hash
            await Users.create(data)

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
    getAllUser:async(req,res)=>{
        const users = await Users.findAll({});

            res.json({
                users
            })
        },
    getUserById: async(req,res)=>{
        let itemId = req.params.id

        try{
            const user = await Users.findByPk(itemId, {
                attributes: ['id', 'name', 'password'],
            });

            res.json({
                user
            })

        }catch(error){
            res.json({
                message: 'Gagal mendapatkan data',
                error
            })
        }
    }
}