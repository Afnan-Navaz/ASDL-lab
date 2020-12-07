const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const Employee = sequelize.define('employee', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'ID'
        }
    }
}, {
    timestamps: false
});

module.exports = Employee;