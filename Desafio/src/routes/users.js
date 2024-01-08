var express = require('express');
const usersController=require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.post('/login', usersController.userLogin);

module.exports = router;
