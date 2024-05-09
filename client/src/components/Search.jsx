// Search.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to another route
    navigate('/search-results');
  };

  return (
    <div>
      <h1>Search</h1>
      <input type="text" placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
