import React, { useState } from 'react';
import List from './List';

function FilteredList({ items }) {
const [search, setSearch] = useState('');
const [type, setType] = useState('All');

const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
const handleTypeChange = (e) => setType(e.target.value);

const filterItem = (item) => {
    const matchesType = type === 'All' || item.type === type;
    const matchesSearch = item.name.toLowerCase().includes(search);
    return matchesType && matchesSearch;
};

const filteredItems = items.filter(filterItem);

return (
    <div className="filter-list">
    <h2>Search Produce</h2>

    <input type="text" placeholder="Search..." onChange={handleSearch} />

    <select onChange={handleTypeChange} value={type}>
        <option value="All">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
    </select>

    <List items={filteredItems} />
    </div>
);
}

export default FilteredList;
