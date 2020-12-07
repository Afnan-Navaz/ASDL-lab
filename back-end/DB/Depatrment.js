const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const Department = sequelize.define('department', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Department;