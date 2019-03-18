import React from 'react';

import { Input, Button } from "../UI";
import SearchParam from './SearchParam/SearchParam';
import './FilterHeader.css';

export const FilterHeader = ( {searchBy, inputValue, onFilterChange, onChangeSearchBy, onSubmitRequest} ) => {
    const inputConfig = {
        placeholder: 'Enter please search by ' + searchBy,
        value: inputValue
    };

    return (
        <div className="filter">
            <form onSubmit={onSubmitRequest}>
                <h2 className="filter-title">Find your movie</h2>
                <Input
                    className="form-control filter-input"
                    onChange={onFilterChange}
                    inputConfig={inputConfig} />
                <SearchParam
                    searchBy={searchBy}
                    onChange={onChangeSearchBy} >
                    <Button className="btn-primary btn-lg filter-button"
                         >SEARCH</Button>
                </SearchParam>
            </form>
        </div>
    );
};