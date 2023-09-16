const express = require('express');
//importing controller functions
const { signupUser, loginUser } = require('../controllers/userController')

const router = express.Router();

//login route
router.post('/login', loginUser)

router.post('/signup', signupUser)
module.exports = router