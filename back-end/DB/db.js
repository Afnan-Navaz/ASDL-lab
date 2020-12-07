var {Sequelize} = require('sequelize');

const sequelize = new Sequelize('asdl', 'afnan', 'afnan', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  });

module.exports = sequelize;