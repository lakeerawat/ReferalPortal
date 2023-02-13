import './style.css';
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <div className='SearchBar'>
      <input type="text" placeholder='Search...' value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)} />
      <p>Searching for: {searchTerm}</p>
    </div>
  );
};

export default SearchBar;
