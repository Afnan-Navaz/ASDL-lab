const {DataTypes} = require('sequelize');
const Role = require('./Role');
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
            model: Role,
            key: 'ID'
        }
    }
}, {
    timestamps: false
});

Employee.belongsTo(Role, {foreignKey: 'role_id', targetKey: 'ID'});

module.exports = Employee;