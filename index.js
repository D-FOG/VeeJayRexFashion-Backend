const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const businessInterestRoutes = require('./routes/businessInterest.routes');
require('dotenv').config();

// Initialize Express App
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/business-interest', businessInterestRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
