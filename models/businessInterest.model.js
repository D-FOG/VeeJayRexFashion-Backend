const mongoose = require('mongoose');

const businessInterestSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  quantityInterested: {
    type: Number,
    required: true
  },
  businessType: {
    type: String,
    enum: ['reseller', 'boutique owner', 'online vendor', 'other'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('BusinessInterest', businessInterestSchema);
