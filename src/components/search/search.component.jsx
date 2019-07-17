import React from 'react';

import './search.style.css';

export const Search = ({ placeholder, eventHandler }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={eventHandler}
    />
)