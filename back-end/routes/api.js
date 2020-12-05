const express = require('express');
const DB = require('../DB/db');
const router = express.Router();

router.get('/employee', (_req, res) => {
    DB.query(`SELECT * FROM EMPLOYEE`, (err, result) => {
        if(err) return res.status(400).send(err);
        res.send(result);
    })
});

router.get('/filter/department/:id', (req, res) => {
    const id = req.params.id;
    DB.query(
        `SELECT e.*
        FROM EMPLOYEE e JOIN ROLE r
        ON e.role_id = r.ID
        where r.department_id = ?`, 
        [id], 
        (err, result) => {
            if(err) return res.status(400).send(err);
            res.send(result);
        }
    )
});

router.post('/employee/add', (req, res) => {
    const {
        first_name,
        last_name,
        role_id,
        manager_id
    } = req.body;
    DB.query(
        `INSERT INTO EMPLOYEE(first_name, last_name, role_id, manager_id)
        VALUES (?, ?, ?, ?)`,
        [first_name, last_name, role_id, manager_id], 
        (err, result) => {
            if(err) return res.status(400).send(err);
            res.send(result);
        }
    )
})

module.exports = router;