
const express = require('express');
const router = express.Router();
const otherController = require('../controllers/otherController');

router.get('/someRoute', otherController.someRoute);
router.post('/anotherRoute', otherController.anotherRoute);

module.exports = router;
