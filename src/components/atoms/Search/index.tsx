import React from 'react';
import './styles.css';

const Search: React.FunctionComponent = () => {
    return (
        <div className="searchbox">
            <input
                className='form-control search-input'
                type='text'
                placeholder='Search'
            ></input>
        </div>
    );
};

export default Search;
