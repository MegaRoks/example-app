import React from 'react';

import './Checkbox.style.scss';
import { CheckboxInterface } from './Checkbox.interface';

export const CheckboxComponentt: React.FC<CheckboxInterface> = ({
    id,
    name,
    label,
    checked,
    onChange,
}: CheckboxInterface) => (
    <div className="custom-checkbox">
        <input
            id={id}
            className="custom-control-input"
            name={name}
            type="checkbox"
            checked={checked}
            onChange={onChange}
        ></input>
        <label className="custom-control-label" htmlFor={name}>
            {label}
        </label>
    </div>
);
