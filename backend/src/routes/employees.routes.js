const express = require('express');

const router  = express.Router(); 

const employeeController = require('../controller/employees.controller'); 

router.get('/employee', employeeController.details);


module.exports = router;