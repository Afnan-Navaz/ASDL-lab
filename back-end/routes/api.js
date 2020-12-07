const express = require('express');
const DB = require('../DB/db');
const router = express.Router();

router.get('/employee', (_req, res) => {
    DB.query(`SELECT * FROM EMPLOYEE`, (err, result) => {
        if(err) return res.status(400).send(err);
        res.send(result);
    })
});

router.get('/employee/filter', (req, res) => {
    const {
        depid,
        roleid
    } = req.query;
    DB.query(
        `SELECT e.*
        FROM EMPLOYEE e 
        JOIN ROLE r ON e.role_id = r.ID
        JOIN DEPARTMENT d ON r.department_id = d.ID
        where d.ID REGEXP '^${depid}$' ${(depid && roleid) ? 'AND' : 'OR'} r.ID REGEXP '^${roleid}$'`, 
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

router.delete('/employee/delete/:id', (req, res) => {
    const id = req.params.id;
    DB.query(
        `DELETE FROM EMPLOYEE WHERE ID = ?`,
        [id], 
        (err, result) => {
            if(err) return res.status(400).send(err);
            res.send(result);
        }
    )
})

router.get('/department', (req, res) => {
    DB.query(
        `SELECT ID, name FROM DEPARTMENT`,
        (err, result) => {
            if(err) return res.status(400).send(err);
            res.send(result);
        }
    )
})

router.get('/roles', (req, res) => {
    DB.query(
        `SELECT ID, title FROM ROLE`,
        (err, result) => {
            if(err) return res.status(400).send(err);
            res.send(result);
        }
    )
})



module.exports = router;