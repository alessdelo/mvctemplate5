const express = require('express');
const router = express.Router();

const the_controller = require('../controllers/ejs');

router.get('/', the_controller.toDo);

router.get('/:name/:age', the_controller.toDo);

module.exports = router;
