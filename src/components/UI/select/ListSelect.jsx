import React from 'react';
import classes from './ListSelect.module.css'

const ListSelect = ({options, defaultOption, value, onChange}) => {
    return (
        <select
            className={classes.mySelect}
            value={value}
            onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defaultOption}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default ListSelect;