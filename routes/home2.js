const express = require('express');
const router = express.Router();

const home2_controller = require('../controllers/home2');

router.get('/home2', home2_controller.home2);

router.get('/', home2_controller.home2);

module.exports = router;
