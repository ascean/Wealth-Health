import React from 'react';

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <input
            id="search"
            type="text"
            className='filter-text'
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <button className = 'filter-button' type="button" onClick={onClear}>
            X
        </button>
    </>
);

export default FilterComponent;