const clientController = require('../controllers/clientController');
var express = require('express');
var router = express.Router();


router.get('/all',clientController.getAllClients);

module.exports = router;
