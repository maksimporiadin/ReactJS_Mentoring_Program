import React, { Component } from 'react';

import { SEARCH_BY } from '../../../App.constants';

import './SearchParam.css';

const SearchParam = ({ searchBy, onChange, children}) => (
    <div className="searchParam" onChange={onChange}>
        <span className="searchParam-title">Search By</span>
        <label htmlFor="search-title"
               className={`btn ${searchBy === SEARCH_BY.TITLE? 'btn-primary' : 'btn-secondary'} btn-sm searchParam-input`}>
            <input type="radio"
                   name="search"
                   id="search-title"
                   value={SEARCH_BY.TITLE}
                   defaultChecked={searchBy === SEARCH_BY.TITLE}/> {SEARCH_BY.TITLE}
        </label>
        <label htmlFor="search-genre"
               className={`btn ${searchBy === SEARCH_BY.GENRE? 'btn-primary' : 'btn-secondary'} btn-sm searchParam-input`}>
            <input type="radio"
                   name="search"
                   id="search-genre"
                   value={SEARCH_BY.GENRE}
                   defaultChecked={searchBy === SEARCH_BY.GENRE}/> {SEARCH_BY.GENRE}
        </label>
        <div className="searchParam-grow"></div>
        {children}
    </div>
)

export default SearchParam;