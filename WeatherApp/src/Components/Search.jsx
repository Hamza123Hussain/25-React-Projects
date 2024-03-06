import React from 'react';

const Search = ({ search, setsearch, handleclick }) => {


  return (
    <div className="search-engine">
      <input
        style={{ border: '1px solid blue', height: "7vh" }}
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
   // Call handleKeyPress function on key press
      />
      <button style={{ height: '7vh' }} onClick={handleclick}>
        SEARCH
      </button>
    </div>
  );
};

export default Search;
