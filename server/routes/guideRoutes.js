<<<<<<< HEAD
// server/routes/guideRoutes.js

const express = require('express');
const router = express.Router();
const guideController = require('../controllers/guideController');

// Route to fetch all guides
router.get('/guides', guideController.getAllGuides);

// Route to create a new guide
router.post('/guides', guideController.createGuide);

// Route to update a guide
router.put('/guides/:id', guideController.updateGuide);

// Route to delete a guide
router.delete('/guides/:id', guideController.deleteGuide);
=======
const express = require('express');
const guideController = require('./guideController');

const router = express.Router();

// Route to fetch all guides
router.get('/', guideController.getAllGuides);

// Route to create a new guide
router.post('/', guideController.createGuide);
>>>>>>> 3aeb697 (first commit adding base files)

module.exports = router;
