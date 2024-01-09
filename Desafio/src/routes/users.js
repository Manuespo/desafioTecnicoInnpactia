var express = require('express');
const userController=require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.post('/login', userController.userLogin);

module.exports = router;
