const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const { authenticateToken } = require('./middleware/authMiddleware');


// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse JSON bodies of requests
app.use(express.json());

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Create an ApolloServer instance with GraphQL schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Get the user object from the request if authenticated
    const user = req.user;
    return { user };
  },
});

// Apply the ApolloServer GraphQL middleware to Express application
server.start().then(() => {
  server.applyMiddleware({ app });
});

// Middleware to handle authentication before executing GraphQL operations
app.use(authenticateToken);

// Define a basic route
app.get('/', (req, res) => {
  res.send('UGuide API');
});
// Endpoint for fetching guides
app.get('/api/guides', (req, res) => {
  res.json(guides);
});
// Endpoint for adding a new guide
app.post('/api/guides', (req, res) => {
  const newGuide = req.body;
  guides.push(newGuide);
  res.status(201).json(newGuide);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
