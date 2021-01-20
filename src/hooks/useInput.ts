import React, { useState } from 'react';

interface IUseInput<T> {
    readonly value: T;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export function useInput<T>(initialValue: T): IUseInput<T> {
    const [value, setValue] = useState<T>(initialValue);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        typeof value === 'string' && setValue(event.target.value as typeof value);
        typeof value === 'boolean' && setValue(event.target.checked as typeof value);
    };

    return { value, onChange };
}
