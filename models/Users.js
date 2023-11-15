const sequelize = require('../config/db')
const { DataTypes } = require('sequelize');
const Todos = require('./Todos')

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: DataTypes.STRING
}, {
    timestamps: true
})

User.hasMany(Todos, {foreignKey: 'user_id'}) //asosiasi

module.exports = User