const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController');

router.get('/', menuController.tampilkanMenu);
router.get('/:id', menuController.tampilkanDetail);

module.exports = router;