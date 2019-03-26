import React from 'react';

import { SORT_BY } from '../../App.constants';

import './style.css';

export const SortBy = ({ sortBy, onChange }) => (
    <div className="sortBy" onChange={onChange}>
        <span className="sortBy-release-date">SORT BY: </span>
        <label htmlFor="sort-release-date"
               className={`btn ${sortBy === SORT_BY.RELEASE_DATE.value? 'btn-outline-primary' : 'btn-outline-secondary'} sortBy-input`}>
            <input type="radio"
                   name="sort"
                   id="sort-release-date"
                   value={SORT_BY.RELEASE_DATE.value}
                   defaultChecked={sortBy === SORT_BY.RELEASE_DATE.value}/> {SORT_BY.RELEASE_DATE.name}
        </label>
        <label htmlFor="sort-rating"
               className={`btn ${sortBy === SORT_BY.RATING.value? 'btn-outline-primary' : 'btn-outline-secondary'} sortBy-input`}>
            <input type="radio"
                   name="sort"
                   id="sort-rating"
                   value={SORT_BY.RATING.value}
                   defaultChecked={sortBy === SORT_BY.RATING.value}/> {SORT_BY.RATING.name}
        </label>
    </div>
);