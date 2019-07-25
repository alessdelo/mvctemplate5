const express = require('express');
const router = express.Router();

const theController = require('../controllers/ejs');

router.get('/', theController.toDo);

module.exports = router;
