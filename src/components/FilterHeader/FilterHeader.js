import React from 'react';

import { Input, Button } from "../UI";
import './FilterHeader.css';

export const FilterHeader = ( {searchBy, onFilterChange} ) => {
    const inputConfig = {
        placeholder: 'Enter please search by ' + searchBy
    };

    return (
        <div className="filter">
            <Input className="form-control filter-input"
                   onChange={onFilterChange}
                   inputConfig={inputConfig} />
        </div>
    );
};