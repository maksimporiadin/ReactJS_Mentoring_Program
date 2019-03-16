import React from 'react';

export const Input = ({ className, placeholder, onChange }) => (
    <input className={className}
           onChange={onChange}
           placeholder={placeholder}/>
);

