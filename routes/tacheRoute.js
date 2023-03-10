const {Task ,SHTask} = require("../models/tache");
const {addTask , getTasks , updateTask , deleteTask , getTaskById} = require("../controller/tacheController");
const validate = require('../middil/validate');
const express = require('express');
var router = express.Router();

router.post('/add' ,validate, addTask );
router.get('/' , getTasks);
router.put('/:id' ,validate, updateTask);
router.delete('/:id' , deleteTask);
router.get('/:id' , getTaskById);

module.exports = router ;