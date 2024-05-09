const mongoose = require('mongoose');

// Define the schema for the Guide model
const guideSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

// Create the Guide model using the schema
const Guide = mongoose.model('Guide', guideSchema);

// Export the Guide model
module.exports = Guide;
