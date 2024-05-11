<<<<<<< HEAD
// server/controllers/guideController.js

const Guide = require('../models/guide');

// Controller function to fetch all guides
exports.getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.json(guides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new guide
exports.createGuide = async (req, res) => {
  const { title, description, videoUrl } = req.body;
  const guide = new Guide({ title, description, videoUrl });

  try {
    const newGuide = await guide.save();
    res.status(201).json(newGuide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to update a guide
exports.updateGuide = async (req, res) => {
  const { id } = req.params;
  const { title, description, videoUrl } = req.body;

  try {
    const guide = await Guide.findById(id);
    if (!guide) return res.status(404).json({ message: 'Guide not found' });

    if (title) guide.title = title;
    if (description) guide.description = description;
    if (videoUrl) guide.videoUrl = videoUrl;

    const updatedGuide = await guide.save();
    res.json(updatedGuide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete a guide
exports.deleteGuide = async (req, res) => {
  const { id } = req.params;

  try {
    const guide = await Guide.findById(id);
    if (!guide) return res.status(404).json({ message: 'Guide not found' });

    await guide.remove();
    res.json({ message: 'Guide deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
=======
// Import the Guide model
const Guide = require('./guideModel');

// Controller to handle fetching all guides
exports.getAllGuides = async (req, res) => {
  try {
    // Fetch all guides from the database
    const guides = await Guide.find();

    // Send the guides as a response
    res.status(200).json({
      status: 'success',
      results: guides.length,
      data: {
        guides
      }
    });
  } catch (err) {
    // If an error occurs, send an error response
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Controller to handle creating a new guide
exports.createGuide = async (req, res) => {
  try {
    // Create a new guide based on the request body
    const newGuide = await Guide.create(req.body);

    // Send the newly created guide as a response
    res.status(201).json({
      status: 'success',
      data: {
        guide: newGuide
      }
    });
  } catch (err) {
    // If an error occurs, send an error response
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
>>>>>>> 3aeb697 (first commit adding base files)
  }
};
