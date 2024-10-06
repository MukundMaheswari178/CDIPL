// routes/additionalDetails.js
const express = require('express');
const router = express.Router();
const additionalDetailsController = require('../controllers/additionalDetailsController');

// Route to add additional details
router.post('/add/:title', additionalDetailsController.addAdditionalDetails);

// Route to get additional details by title
router.get('/get/:title', additionalDetailsController.getAdditionalDetails);

module.exports = router;
