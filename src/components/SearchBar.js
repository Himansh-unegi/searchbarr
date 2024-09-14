// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import countries from '../data/countries.json';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (query) {
      const results = countries.filter(
        (country) =>
          country.country.toLowerCase().includes(query.toLowerCase()) ||
          country.capital.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCountries(results);
    } else {
      setFilteredCountries([]);
    }
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by country or capital"
      />
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>
            {country.country} - {country.capital}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
