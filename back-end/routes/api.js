const express = require('express');
const Employee = require('../DB/Employee');
const Role = require('../DB/Role');
const Department = require('../DB/Depatrment');
const router = express.Router();

router.get('/employee', async (_req, res) => {
    try{
        const employees = await Employee.findAll();
        res.send(employees);
    }catch(e){
        res.status(400).send(e);
    }
});

router.get('/department', async (req, res) => {
    try{
        const department = await Department.findAll();
        res.send(department);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get('/roles', async (req, res) => {
    try{
        const role = await Role.findAll();
        res.send(role);
    }catch(e){
        res.status(400).send(e);
    }
})

router.post('/department/add', async (req, res) => {
    try{
        const department = await Department.create({name: req.body.name});
        res.send(department);
    }catch(e){
        res.status(400).send(e);
    }
})

router.post('/role/add', async (req, res) => {
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

router.post('/employee/add', async (req, res) => {
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

// router.get('/employee/filter', (req, res) => {
//     const {
//         depid,
//         roleid
//     } = req.query;
//     DB.query(
//         `SELECT e.*
//         FROM EMPLOYEE e 
//         JOIN ROLE r ON e.role_id = r.ID
//         JOIN DEPARTMENT d ON r.department_id = d.ID
//         where d.ID REGEXP '^${depid}$' ${(depid && roleid) ? 'AND' : 'OR'} r.ID REGEXP '^${roleid}$'`, 
//         (err, result) => {
//             if(err) return res.status(400).send(err);
//             res.send(result);
//         }
//     )
// });

router.delete('/employee/delete/:id', async (req, res) => {
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