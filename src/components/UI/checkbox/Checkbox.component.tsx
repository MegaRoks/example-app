import React from 'react';

import './Checkbox.style.scss';
import { CheckboxInterface } from './Checkbox.interface';

export const CheckboxComponent: React.FC<CheckboxInterface> = ({
    id,
    name,
    label,
    checked,
    onChange,
}: CheckboxInterface) => (
    <div className="custom-checkbox" onChange={onChange}>
        <label className="custom-control-label" htmlFor={name}>
            <input
                id={id}
                className="custom-control-input"
                name={name}
                type="checkbox"
                defaultChecked={checked}
            ></input>
            {label}
        </label>
    </div>
);
