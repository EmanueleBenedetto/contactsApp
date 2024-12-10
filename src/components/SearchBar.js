import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name or username..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
