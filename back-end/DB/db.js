var {Sequelize} = require('sequelize');

// const sequelize = new Sequelize('asdl', 'afnan', 'afnan', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });

const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;