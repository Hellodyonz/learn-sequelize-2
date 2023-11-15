const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: 'dyonz123',
    database: 'sequelize1r'
  });

  module.exports = sequelize