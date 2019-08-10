const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/home');

router.get('/home', home_controller.toDo);

router.get('/', home_controller.toDo);

router.get('/basics', home_controller.toDo);

module.exports = router;

