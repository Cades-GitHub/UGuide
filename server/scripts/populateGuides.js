const mongoose = require('mongoose');
const Guide = require('./models/guideModel');
const guidesData = require('./guides.json');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/UGuide', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to populate guides
async function populateGuides() {
  try {
    // Clear existing guides
    await Guide.deleteMany();

    // Insert new guides from guidesData
    await Guide.insertMany(guidesData);

    console.log('Guides inserted successfully!');
    process.exit(0); // Exit script after successful insertion
  } catch (error) {
    console.error('Error populating guides:', error);
    process.exit(1); // Exit with error code
  }
}

// Call the function to populate guides
populateGuides();
