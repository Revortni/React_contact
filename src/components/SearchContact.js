import React from 'react';
import './styles/SearchContact.css';
const SearchItem = props => {
  const handleSearch = e => {
    let filter = e.target.value;
    props.handleSearch(filter);
  };

  return (
    <div className='search_wrapper'>
      <div className='container'>
        <input
          className='search_item'
          type='text'
          name='item'
          onChange={handleSearch}
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export default SearchItem;
