const sequelize = require('../config/db')
const { DataTypes } = require('sequelize');
const User = require('./Users')

const Todos = sequelize.define('Todos', {
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    },
    user_id: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: true
})


module.exports = Todos