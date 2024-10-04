// routes/userRoutes.js
const express = require('express');
const { signupUser, loginUser } = require('../controllers/userController');
const router = express.Router();


// Route for user signup
router.post('/signup', signupUser);

// Route for user login
router.post('/login', loginUser);


module.exports = router;