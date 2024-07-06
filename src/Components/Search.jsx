import React, { useState } from 'react';
import searchIcon from '../images/Vector (1).png';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <div className="search">
            <img width="24px" height="24px" src={searchIcon} alt="search icon" />
            <input
                type="text"
                className="search-input"
                placeholder="Search For A Disease"
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;
