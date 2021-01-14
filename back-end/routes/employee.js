const express = require('express');
const Employee = require('../DB/Employee');
const Role = require('../DB/Role');
const Department = require('../DB/Depatrment');
const {Op} = require('sequelize');
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

router.get('/id/:id', async (req, res) => {
    try{
        const employees = await Employee.findOne({
            include: {
                model: Role,
                include: {
                    model: Department
                }
            },
            where: {
                ID: req.params.id,
            },
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
        roleid,
        firstname
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
                [Op.and]: [
                    {role_id: roleid ? roleid : {
                        [Op.not]: null
                    }},
                    {first_name: {
                        [Op.iRegexp]: firstname ? `^${firstname}` : '^.*'
                    }}
                ]
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
        res.send({ message: 'delete' });
    }catch(e){
        res.status(400).send(e);
    }
})

router.put('/edit', async (req, res) => {
    const {
        first_name,
        last_name,
        role_id,
        id,
    } = req.body;
    try{
        const employee = await Employee.update({
            first_name,
            last_name,
            role_id
        }, {
            where: {
                ID: id
            }
        });
        res.send(employee);
    }catch(e){
        res.status(400).send(e);
    }
});

module.exports = router;