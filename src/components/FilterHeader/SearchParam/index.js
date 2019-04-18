import React, { Component } from 'react';

import { SEARCH_BY } from '../../../App.constants';

import './style.css';

const SearchParam = ({ searchBy, onChange, children}) => (
    <div className="searchParam" onChange={onChange}>
            <span className="searchParam-title">Search By</span>
            <label htmlFor="search-title"
                   className={`btn ${searchBy === SEARCH_BY.TITLE.value? 'btn-primary' : 'btn-secondary'} btn-sm searchParam-input`}>
                <input type="radio"
                       name="search"
                       id="search-title"
                       value={SEARCH_BY.TITLE.value}/> {SEARCH_BY.TITLE.name}
            </label>
            <label htmlFor="search-genre"
                   className={`btn ${searchBy === SEARCH_BY.GENRE.value? 'btn-primary' : 'btn-secondary'} btn-sm searchParam-input`}>
                <input type="radio"
                       name="search"
                       id="search-genre"
                       value={SEARCH_BY.GENRE.value}/> {SEARCH_BY.GENRE.name}
            </label>
        <div className="searchParam-grow"></div>
        {children}
    </div>
)

export default SearchParam;