import React, { useState } from 'react';
import './SearchID.css';
import axios from 'axios';

const SearchID = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:1000/employee/${searchTerm}`);
      setSearchResult(response.data.data);
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResult(null);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
    <div className='searchEmployee'>
      <input
        type="text"
        placeholder='Search by Employee ID'
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      {searchResult && (
        <div className="mainFetch">
          <div className='fetchData'>
            <div>{searchResult.id}</div>
            <div>{searchResult.name}</div>
            <div>{searchResult.position}</div>
          </div>
        </div>
      )}
    
    </>
  );
};

export default SearchID;
