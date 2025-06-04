const BusinessInterest = require('../models/businessInterest.model');

const createInterest = async (data) => {
  const interest = new BusinessInterest(data);
  return await interest.save();
};

module.exports = {
  createInterest
};
