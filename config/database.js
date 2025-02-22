const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('joga_sequelize', 'root', 'qwerty', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
