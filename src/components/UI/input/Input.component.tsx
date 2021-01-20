import React from 'react';

import './Input.style.scss';
import { InputInterface } from './Input.interface';

export const InputComponent = React.forwardRef<HTMLInputElement, InputInterface>(
    ({ id, type, placeholder, value, name, onChange }, ref) => (
        <div className="input__container">
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                ref={ref}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    ),
);
