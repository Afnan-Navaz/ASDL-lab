const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const Role = sequelize.define('role', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER
    },
    department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departments',
            key: 'ID'
        }
    }
}, {
    timestamps: false
});

module.exports = Role;