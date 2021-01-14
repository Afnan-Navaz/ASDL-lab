const express = require('express');
const sequelize = require('./DB/db');
const role = require('./routes/role');
const employee = require('./routes/employee');
const department = require('./routes/department');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: true});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/api/employee', employee);
app.use('/api/role', role);
app.use('/api/department', department);

const port = process.env.PORT || 4000;

app.listen(port, () => {console.log(`listening on PORT:${port}`)});