const express = require('express');
const router = express.Router();
const businessInterestController = require('../controllers/businessInterest.controller');

// POST /api/business-interest
router.post('/', businessInterestController.createBusinessInterest);

module.exports = router;
