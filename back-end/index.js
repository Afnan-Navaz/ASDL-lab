const express = require('express');
const DB = require('./DB/db');
const api = require('./routes/api');

const app = express();
DB.connect((err) => {
    if (err) throw err;
    console.log("connected to mysql");
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`listening on PORT:${port}`)});