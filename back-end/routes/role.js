const express = require('express');
const Role = require('../DB/Role');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const role = await Role.findAll();
        res.send(role);
    }catch(e){
        res.status(400).send(e);
    }
})

router.post('/add', async (req, res) => {
    const {
        title,
        salary,
        department_id
    } = req.body;
    try{
        const role = await Role.create({
            title,
            salary,
            department_id
        });
        res.send(role);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;