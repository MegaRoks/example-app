import React from 'react';

import './Input.style.scss';
import { InputInterface } from './Input.interface';

export const InputComponent: React.FC<InputInterface> = ({
    id,
    type,
    name,
    value,
    onChange,
}: InputInterface) => (
    <div className="input__container">
        <input
            id={id}
            type={type}
            name={name}
            className="input__field"
            value={value}
            onChange={onChange}
            autoComplete="off"
            required
        />
        <label htmlFor="name" className="input__label">
            <span className="input__text">Name</span>
        </label>
    </div>
);
