const express = require('express');
const Employee = require('../DB/Employee');
const Role = require('../DB/Role');
const Department = require('../DB/Depatrment');
const router = express.Router();

router.get('/', async (_req, res) => {
    try{
        const employees = await Employee.findAll({
            include: {
                model: Role,
                include: {
                    model: Department
                }
            }
        });
        res.send(employees);
    }catch(e){
        res.status(400).send(e);
    }
});

router.post('/add', async (req, res) => {
    const {
        first_name,
        last_name,
        role_id,
        manager_id
    } = req.body;
    try{
        const employee = await Employee.create({
            first_name: first_name,
            last_name: last_name,
            role_id: role_id,
        });
        res.send(employee);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get('/filter', async (req, res) => {
    const {
        roleid
    } = req.query;

    try{
        const employees = await Employee.findAll({
            include: {
                model: Role,
                include: {
                    model: Department
                }
            },
            where: {
                role_id: roleid
            }
        });
        res.send(employees);
    }catch(e){
        res.status(400).send(e);
    }
});

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try{
        await Employee.destroy({
            where: {
                ID: id
            }
        })
        res.send("deleted");
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;