const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/home');

router.get('/home', home_controller.home2);

router.get('/', home_controller.home2);

module.exports = router;
