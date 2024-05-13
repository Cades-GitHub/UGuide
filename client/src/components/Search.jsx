import React, { useState } from 'react';
import GlobalApi from './GlobalApi';

const GameSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const api = GlobalApi();
      const response = await api.searchGames(searchQuery);
      onSearch(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search for a game..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default GameSearch;
