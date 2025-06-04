const businessInterestService = require('../services/businessInterest.service');

const createBusinessInterest = async (req, res) => {
  try {
    const result = await businessInterestService.createInterest(req.body);
    res.status(201).json({ message: 'Business interest saved successfully', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save interest', error: error.message });
  }
};

module.exports = {
  createBusinessInterest
};
