// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const guideRoutes = require('./routes/guideRoutes');
const config = require('./config/config');
const Guide = require('./models/guide');

const app = express();

// Route handler for fetching guides
app.get('/api/guides', async (req, res) => {
    try {
      const guides = await Guide.find(); // Fetch guide data from MongoDB
      res.json(guides); // Respond with guide data as JSON
    } catch (error) {
      console.error('Error fetching guides:', error);
      res.status(500).json({ error: 'Internal server error' }); // Respond with error message
    }
  });
  
  // Other routes and middleware configurations...
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });