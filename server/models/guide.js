// Import mongoose
const mongoose = require('mongoose');

// Define the schema for a guide
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
  imageUrl: {
    type: String,
    required: true,
  },
});

// Create a model for the guide schema
const Guide = mongoose.model('guide', guideSchema);

// Export the model
module.exports = Guide;
