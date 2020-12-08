const express = require('express');
const Department = require('../DB/Depatrment');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const department = await Department.findAll();
        res.send(department);
    }catch(e){
        res.status(400).send(e);
    }
})

router.post('/add', async (req, res) => {
    try{
        const department = await Department.create({name: req.body.name});
        res.send(department);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;