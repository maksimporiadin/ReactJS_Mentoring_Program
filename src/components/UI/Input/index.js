import React from 'react';

export const Input = ({ className, onChange, inputConfig }) => (
    <input className={className}
           onChange={onChange}
           {...inputConfig} />
);

