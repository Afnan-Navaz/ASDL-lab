const express = require('express');
const DB = require('./DB/db');
const api = require('./routes/api');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
DB.connect((err) => {
    if (err) throw err;
    console.log("connected to mysql");
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/api', api);

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`listening on PORT:${port}`)});