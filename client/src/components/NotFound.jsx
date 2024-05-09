import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-4">Page Not Found</h1>
      <p className="text-lg text-center">Sorry, the page you're looking for does not exist.</p>
      <div className="mt-4 flex justify-center">
        <Link to="/" className="text-lg bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
