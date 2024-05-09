// importGuides.js

const mongoose = require('mongoose');
const Guide = require('./models/guide'); // Import your Mongoose guide model
const guidesData = require('./guidesData.json'); // Load guide data from JSON file

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/UGuide', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Insert guide data into MongoDB
    Guide.insertMany(guidesData)
      .then(() => {
        console.log('Guide data imported successfully');
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error importing guide data:', err);
        mongoose.connection.close();
      });
  })
  .catch(err => console.error('MongoDB connection error:', err));
