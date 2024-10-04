const express = require('express');
const router = express.Router();
const { getAmenitiesByProjectTitle, createOrUpdateAmenities } = require('../controllers/amenitiesController');

// Fetch amenities by project title
router.get('/fetchamenities/:tittle', getAmenitiesByProjectTitle);

// Create or update amenities for a project
router.post('/amenities/:tittle', createOrUpdateAmenities);

module.exports = router;
