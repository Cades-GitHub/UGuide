const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware to authenticate JWT token
const authenticateToken = async (req, res, next) => {
  try {
    // Extract JWT token from request headers
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    // If no token provided, return unauthorized
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify JWT token
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      // Extract user ID from decoded token
      const userId = decodedToken.userId;

      // Check if user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Attach user object to request for further use
      req.user = user;
      next(); // Proceed to next middleware or route handler
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { authenticateToken };
