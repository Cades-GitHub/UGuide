const Guide = require('../models/guide'); // Import the Guide model

const resolvers = {
  Query: {
    // Resolver function for fetching all guides
    guides: async () => {
      try {
        const guides = await Guide.find(); // Fetch all guides from the database
        console.log('GUIDES', guides);
        return guides; // Return the fetched guides
      } catch (error) {
        throw new Error('Failed to fetch guides'); // Throw an error if fetching fails
      }
    },
    // Resolver function for fetching a single guide by ID
    guide: async (_, { id }) => {
      try {
        const guide = await Guide.findById(id); // Fetch the guide by ID from the database
        return guide; // Return the fetched guide
      } catch (error) {
        throw new Error('Guide not found'); // Throw an error if the guide is not found
      }
    },
  },
  Mutation: {
    // Resolver function for creating a new guide
    createGuide: async (_, { input }) => {
      try {
        const newGuide = await Guide.create(input); // Create a new guide in the database
        return newGuide; // Return the newly created guide
      } catch (error) {
        throw new Error('Failed to create guide'); // Throw an error if creation fails
      }
    },
    // Resolver function for updating an existing guide
    updateGuide: async (_, { id, input }) => {
      try {
        const updatedGuide = await Guide.findByIdAndUpdate(id, input, {
          new: true,
        }); // Update the guide in the database
        return updatedGuide; // Return the updated guide
      } catch (error) {
        throw new Error('Failed to update guide'); // Throw an error if update fails
      }
    },
    // Resolver function for deleting a guide by ID
    deleteGuide: async (_, { id }) => {
      try {
        await Guide.findByIdAndDelete(id); // Delete the guide from the database
        return true; // Return true if deletion is successful
      } catch (error) {
        throw new Error('Failed to delete guide'); // Throw an error if deletion fails
      }
    },
  },
};

module.exports = resolvers;
