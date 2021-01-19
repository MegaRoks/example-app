import React from 'react';

import './Button.style.scss';
import { ButtonInterface } from './Button.interface';

export const ButtonComponent: React.FC<ButtonInterface> = ({
    id,
    type,
    text,
    disabled,
    onClick,
}: ButtonInterface) => (
    <button className="button" id={id} type={type} disabled={disabled} onClick={onClick}>
        {text}
    </button>
);
