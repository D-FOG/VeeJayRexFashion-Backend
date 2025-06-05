const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const businessInterestRoutes = require('./routes/businessInterest.route');
require('dotenv').config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

//get request to check if the server is running
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the VeeJayRex Fashion API</h1>
    <p>Check the docs 👉👉👉 <a href="https://documenter.getpostman.com/view/24619744/2sB2x2JZBT">here</a> !!</p>
  `);
});

// Routes
app.use('/api/business-interest', businessInterestRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
