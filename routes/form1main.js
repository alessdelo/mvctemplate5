const express = require('express');
const router = express.Router();

// takes variables and functions from controllers/home.js
const the_controller = require('../controllers/form1main');

router.get('/', the_controller.toDo);

module.exports = router;
